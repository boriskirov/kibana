/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { indexPatternMock } from '../../__mocks__/index_pattern';
import { getEuiGridColumns } from './discover_grid_columns';
import { indexPatternWithTimefieldMock } from '../../__mocks__/index_pattern_with_timefield';
import { discoverGridContextMock } from '../../__mocks__/grid_context';
import { discoverServiceMock } from '../../__mocks__/services';

describe('Discover grid columns', function () {
  it('returns eui grid columns without time column', async () => {
    const actual = getEuiGridColumns({
      columns: ['extension', 'message'],
      settings: {},
      indexPattern: indexPatternMock,
      showTimeCol: false,
      defaultColumns: false,
      isSortEnabled: true,
      valueToStringConverter: discoverGridContextMock.valueToStringConverter,
      rowsCount: 100,
      services: discoverServiceMock,
      onFilter: () => {},
    });
    expect(actual).toMatchInlineSnapshot(`
      Array [
        Object {
          "actions": Object {
            "additional": Array [
              Object {
                "data-test-subj": "gridCopyColumnNameToClipBoardButton",
                "iconProps": Object {
                  "size": "m",
                },
                "iconType": "copyClipboard",
                "label": <FormattedMessage
                  defaultMessage="Copy name"
                  id="discover.grid.copyColumnNameToClipBoardButton"
                  values={Object {}}
                />,
                "onClick": [Function],
                "size": "xs",
              },
              Object {
                "data-test-subj": "gridCopyColumnValuesToClipBoardButton",
                "iconProps": Object {
                  "size": "m",
                },
                "iconType": "copyClipboard",
                "label": <FormattedMessage
                  defaultMessage="Copy column"
                  id="discover.grid.copyColumnValuesToClipBoardButton"
                  values={Object {}}
                />,
                "onClick": [Function],
                "size": "xs",
              },
            ],
            "showHide": Object {
              "iconType": "cross",
              "label": "Remove column",
            },
            "showMoveLeft": true,
            "showMoveRight": true,
          },
          "cellActions": Array [
            [Function],
            [Function],
          ],
          "display": "extension",
          "id": "extension",
          "isSortable": false,
          "schema": "string",
        },
        Object {
          "actions": Object {
            "additional": Array [
              Object {
                "data-test-subj": "gridCopyColumnNameToClipBoardButton",
                "iconProps": Object {
                  "size": "m",
                },
                "iconType": "copyClipboard",
                "label": <FormattedMessage
                  defaultMessage="Copy name"
                  id="discover.grid.copyColumnNameToClipBoardButton"
                  values={Object {}}
                />,
                "onClick": [Function],
                "size": "xs",
              },
              Object {
                "data-test-subj": "gridCopyColumnValuesToClipBoardButton",
                "iconProps": Object {
                  "size": "m",
                },
                "iconType": "copyClipboard",
                "label": <FormattedMessage
                  defaultMessage="Copy column"
                  id="discover.grid.copyColumnValuesToClipBoardButton"
                  values={Object {}}
                />,
                "onClick": [Function],
                "size": "xs",
              },
            ],
            "showHide": Object {
              "iconType": "cross",
              "label": "Remove column",
            },
            "showMoveLeft": true,
            "showMoveRight": true,
          },
          "cellActions": undefined,
          "display": "message",
          "id": "message",
          "isSortable": false,
          "schema": "string",
        },
      ]
    `);
  });
  it('returns eui grid columns without time column showing default columns', async () => {
    const actual = getEuiGridColumns({
      columns: ['extension', 'message'],
      settings: {},
      indexPattern: indexPatternWithTimefieldMock,
      showTimeCol: false,
      defaultColumns: true,
      isSortEnabled: true,
      valueToStringConverter: discoverGridContextMock.valueToStringConverter,
      rowsCount: 100,
      services: discoverServiceMock,
      onFilter: () => {},
    });
    expect(actual).toMatchInlineSnapshot(`
      Array [
        Object {
          "actions": Object {
            "additional": Array [
              Object {
                "data-test-subj": "gridCopyColumnNameToClipBoardButton",
                "iconProps": Object {
                  "size": "m",
                },
                "iconType": "copyClipboard",
                "label": <FormattedMessage
                  defaultMessage="Copy name"
                  id="discover.grid.copyColumnNameToClipBoardButton"
                  values={Object {}}
                />,
                "onClick": [Function],
                "size": "xs",
              },
              Object {
                "data-test-subj": "gridCopyColumnValuesToClipBoardButton",
                "iconProps": Object {
                  "size": "m",
                },
                "iconType": "copyClipboard",
                "label": <FormattedMessage
                  defaultMessage="Copy column"
                  id="discover.grid.copyColumnValuesToClipBoardButton"
                  values={Object {}}
                />,
                "onClick": [Function],
                "size": "xs",
              },
            ],
            "showHide": false,
            "showMoveLeft": false,
            "showMoveRight": false,
          },
          "cellActions": Array [
            [Function],
            [Function],
          ],
          "display": undefined,
          "id": "extension",
          "isSortable": false,
          "schema": "string",
        },
        Object {
          "actions": Object {
            "additional": Array [
              Object {
                "data-test-subj": "gridCopyColumnNameToClipBoardButton",
                "iconProps": Object {
                  "size": "m",
                },
                "iconType": "copyClipboard",
                "label": <FormattedMessage
                  defaultMessage="Copy name"
                  id="discover.grid.copyColumnNameToClipBoardButton"
                  values={Object {}}
                />,
                "onClick": [Function],
                "size": "xs",
              },
              Object {
                "data-test-subj": "gridCopyColumnValuesToClipBoardButton",
                "iconProps": Object {
                  "size": "m",
                },
                "iconType": "copyClipboard",
                "label": <FormattedMessage
                  defaultMessage="Copy column"
                  id="discover.grid.copyColumnValuesToClipBoardButton"
                  values={Object {}}
                />,
                "onClick": [Function],
                "size": "xs",
              },
            ],
            "showHide": false,
            "showMoveLeft": false,
            "showMoveRight": false,
          },
          "cellActions": undefined,
          "display": undefined,
          "id": "message",
          "isSortable": false,
          "schema": "string",
        },
      ]
    `);
  });
  it('returns eui grid columns with time column', async () => {
    const actual = getEuiGridColumns({
      columns: ['extension', 'message'],
      settings: {},
      indexPattern: indexPatternWithTimefieldMock,
      showTimeCol: true,
      defaultColumns: false,
      isSortEnabled: true,
      valueToStringConverter: discoverGridContextMock.valueToStringConverter,
      rowsCount: 100,
      services: discoverServiceMock,
      onFilter: () => {},
    });
    expect(actual).toMatchInlineSnapshot(`
      Array [
        Object {
          "actions": Object {
            "additional": Array [
              Object {
                "data-test-subj": "gridCopyColumnNameToClipBoardButton",
                "iconProps": Object {
                  "size": "m",
                },
                "iconType": "copyClipboard",
                "label": <FormattedMessage
                  defaultMessage="Copy name"
                  id="discover.grid.copyColumnNameToClipBoardButton"
                  values={Object {}}
                />,
                "onClick": [Function],
                "size": "xs",
              },
              Object {
                "data-test-subj": "gridCopyColumnValuesToClipBoardButton",
                "iconProps": Object {
                  "size": "m",
                },
                "iconType": "copyClipboard",
                "label": <FormattedMessage
                  defaultMessage="Copy column"
                  id="discover.grid.copyColumnValuesToClipBoardButton"
                  values={Object {}}
                />,
                "onClick": [Function],
                "size": "xs",
              },
            ],
            "showHide": false,
            "showMoveLeft": true,
            "showMoveRight": true,
          },
          "cellActions": Array [
            [Function],
            [Function],
          ],
          "display": <div
            aria-label="timestamp - this field represents the time that events occurred."
          >
            <EuiToolTip
              content="This field represents the time that events occurred."
              delay="regular"
              display="inlineBlock"
              position="top"
            >
              <React.Fragment>
                timestamp
                 
                <EuiIcon
                  type="clock"
                />
              </React.Fragment>
            </EuiToolTip>
          </div>,
          "id": "timestamp",
          "initialWidth": 210,
          "isSortable": true,
          "schema": "datetime",
        },
        Object {
          "actions": Object {
            "additional": Array [
              Object {
                "data-test-subj": "gridCopyColumnNameToClipBoardButton",
                "iconProps": Object {
                  "size": "m",
                },
                "iconType": "copyClipboard",
                "label": <FormattedMessage
                  defaultMessage="Copy name"
                  id="discover.grid.copyColumnNameToClipBoardButton"
                  values={Object {}}
                />,
                "onClick": [Function],
                "size": "xs",
              },
              Object {
                "data-test-subj": "gridCopyColumnValuesToClipBoardButton",
                "iconProps": Object {
                  "size": "m",
                },
                "iconType": "copyClipboard",
                "label": <FormattedMessage
                  defaultMessage="Copy column"
                  id="discover.grid.copyColumnValuesToClipBoardButton"
                  values={Object {}}
                />,
                "onClick": [Function],
                "size": "xs",
              },
            ],
            "showHide": Object {
              "iconType": "cross",
              "label": "Remove column",
            },
            "showMoveLeft": true,
            "showMoveRight": true,
          },
          "cellActions": Array [
            [Function],
            [Function],
          ],
          "display": undefined,
          "id": "extension",
          "isSortable": false,
          "schema": "string",
        },
        Object {
          "actions": Object {
            "additional": Array [
              Object {
                "data-test-subj": "gridCopyColumnNameToClipBoardButton",
                "iconProps": Object {
                  "size": "m",
                },
                "iconType": "copyClipboard",
                "label": <FormattedMessage
                  defaultMessage="Copy name"
                  id="discover.grid.copyColumnNameToClipBoardButton"
                  values={Object {}}
                />,
                "onClick": [Function],
                "size": "xs",
              },
              Object {
                "data-test-subj": "gridCopyColumnValuesToClipBoardButton",
                "iconProps": Object {
                  "size": "m",
                },
                "iconType": "copyClipboard",
                "label": <FormattedMessage
                  defaultMessage="Copy column"
                  id="discover.grid.copyColumnValuesToClipBoardButton"
                  values={Object {}}
                />,
                "onClick": [Function],
                "size": "xs",
              },
            ],
            "showHide": Object {
              "iconType": "cross",
              "label": "Remove column",
            },
            "showMoveLeft": true,
            "showMoveRight": true,
          },
          "cellActions": undefined,
          "display": undefined,
          "id": "message",
          "isSortable": false,
          "schema": "string",
        },
      ]
    `);
  });
});
