/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import React from 'react';
import { EuiLoadingLogo, EuiButton, EuiEmptyPrompt } from '@elastic/eui';
import { FormattedMessage } from '@kbn/i18n-react';
import { useCspBenchmarkIntegrations } from '../pages/benchmarks/use_csp_benchmark_integrations';
import { useCISIntegrationPoliciesLink } from '../common/navigation/use_navigate_to_cis_integration_policies';
import { NO_FINDINGS_STATUS_TEST_SUBJ } from './test_subjects';
import { CloudPosturePage } from './cloud_posture_page';
import { useCspSetupStatusApi } from '../common/api/use_setup_status_api';

const REFETCH_INTERVAL_MS = 20000;

const NotDeployed = () => {
  // using an existing hook to get agent id and package policy id
  const benchmarks = useCspBenchmarkIntegrations({
    name: '',
    page: 1,
    perPage: 1,
    sortField: 'package_policy.name',
    sortOrder: 'asc',
  });

  // the ids are not a must, but as long as we have them we can open the add agent flyout
  const firstBenchmark = benchmarks.data?.items?.[0];
  const integrationPoliciesLink = useCISIntegrationPoliciesLink({
    addAgentToPolicyId: firstBenchmark?.agent_policy.id || '',
    integration: firstBenchmark?.package_policy.id || '',
  });

  return (
    <EuiEmptyPrompt
      data-test-subj={NO_FINDINGS_STATUS_TEST_SUBJ.NO_AGENTS_DEPLOYED}
      color="plain"
      iconType="fleetApp"
      title={
        <h2>
          <FormattedMessage
            id="xpack.csp.noFindingsStates.noAgentsDeployed.noAgentsDeployedTitle"
            defaultMessage="No Agents Installed"
          />
        </h2>
      }
      body={
        <p>
          <FormattedMessage
            id="xpack.csp.noFindingsStates.noAgentsDeployed.noAgentsDeployedDescription"
            defaultMessage="To see findings, please finish the setup process by installing an elastic agent on your
          Kubernetes cluster."
          />
        </p>
      }
      actions={[
        <EuiButton fill href={integrationPoliciesLink} isDisabled={!integrationPoliciesLink}>
          <FormattedMessage
            id="xpack.csp.noFindingsStates.noAgentsDeployed.noAgentsDeployedButtonTitle"
            defaultMessage="Install Agent"
          />
        </EuiButton>,
      ]}
    />
  );
};

const Indexing = () => (
  <EuiEmptyPrompt
    data-test-subj={NO_FINDINGS_STATUS_TEST_SUBJ.INDEXING}
    color="plain"
    icon={<EuiLoadingLogo logo="logoSecurity" size="xl" />}
    title={
      <h2>
        <FormattedMessage
          id="xpack.csp.noFindingsStates.indexing.indexingButtonTitle"
          defaultMessage="No Findings Yet"
        />
      </h2>
    }
    body={
      <p>
        <FormattedMessage
          id="xpack.csp.noFindingsStates.indexing.indexingDescription"
          defaultMessage="Waiting for data to be collected and indexed. Check back later to see your findings"
        />
      </p>
    }
  />
);

const IndexTimeout = () => (
  <EuiEmptyPrompt
    data-test-subj={NO_FINDINGS_STATUS_TEST_SUBJ.INDEX_TIMEOUT}
    color="plain"
    icon={<EuiLoadingLogo logo="logoSecurity" size="xl" />}
    title={
      <h2>
        <FormattedMessage
          id="xpack.csp.noFindingsStates.indexTimeout.indexTimeoutTitle"
          defaultMessage="Findings Delayed"
        />
      </h2>
    }
    body={
      <p>
        <FormattedMessage
          id="xpack.csp.noFindingsStates.indexTimeout.indexTimeoutDescription"
          defaultMessage="Collecting findings is taking longer than expected, check back again soon"
        />
      </p>
    }
  />
);

/**
 * This component will return the render states based on cloud posture setup status API
 * since 'not-installed' is being checked globally by CloudPosturePage and 'indexed' is the pass condition, those states won't be handled here
 * */
export const NoFindingsStates = () => {
  const getSetupStatus = useCspSetupStatusApi({
    options: { refetchInterval: REFETCH_INTERVAL_MS },
  });
  const status = getSetupStatus.data?.status;

  const render = () => {
    if (status === 'not-deployed') return <NotDeployed />; // integration installed, but no agents added
    if (status === 'indexing') return <Indexing />; // agent added, index timeout hasn't passed since installation
    if (status === 'index-timeout') return <IndexTimeout />; // agent added, index timeout has passed
  };

  return <CloudPosturePage query={getSetupStatus}>{render()}</CloudPosturePage>;
};
