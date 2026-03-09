import { BehaviorSubject } from 'rxjs';
import type { PinnedControlLayoutState, PinnedControlState } from '@kbn/controls-schemas';
import type { ControlsLayout } from '@kbn/controls-renderer/src/types';
import type { PanelPackage } from '@kbn/presentation-publishing';
import type { ControlGroupCreationOptions, ControlPanelsState } from './types';
import type { useChildrenApi } from './use_children_api';
export declare const useLayoutApi: (state: ControlGroupCreationOptions["initialState"] | undefined, childrenApi: ReturnType<typeof useChildrenApi>["childrenApi"], lastSavedState$Ref: React.MutableRefObject<BehaviorSubject<ControlPanelsState>>) => {
    layout$: BehaviorSubject<ControlsLayout>;
    getLayout: (id: string) => PinnedControlLayoutState;
    setLayout: (id: string, newLayout: PinnedControlLayoutState) => void;
    addNewPanel: <State extends PinnedControlState = Readonly<{
        uid?: string | undefined;
        width?: "small" | "medium" | "large" | undefined;
        grow?: boolean | undefined;
    } & {
        type: "optionsListControl";
        config: Readonly<{
            title?: string | undefined;
            use_global_filters?: boolean | undefined;
            ignore_validations?: boolean | undefined;
            display_settings?: Readonly<{
                placeholder?: string | undefined;
                hide_action_bar?: boolean | undefined;
                hide_exclude?: boolean | undefined;
                hide_exists?: boolean | undefined;
                hide_sort?: boolean | undefined;
            } & {}> | undefined;
            single_select?: boolean | undefined;
            exclude?: boolean | undefined;
            exists_selected?: boolean | undefined;
            run_past_timeout?: boolean | undefined;
            search_technique?: "prefix" | "wildcard" | "exact" | undefined;
            selected_options?: (string | number)[] | undefined;
            sort?: Readonly<{} & {
                by: "_count" | "_key";
                direction: "asc" | "desc";
            }> | undefined;
        } & {
            data_view_id: string;
            field_name: string;
        }>;
    }> | Readonly<{
        uid?: string | undefined;
        width?: "small" | "medium" | "large" | undefined;
        grow?: boolean | undefined;
    } & {
        type: "rangeSliderControl";
        config: Readonly<{
            title?: string | undefined;
            use_global_filters?: boolean | undefined;
            ignore_validations?: boolean | undefined;
            value?: string[] | undefined;
            step?: number | undefined;
        } & {
            data_view_id: string;
            field_name: string;
        }>;
    }> | Readonly<{
        uid?: string | undefined;
        width?: "small" | "medium" | "large" | undefined;
        grow?: boolean | undefined;
    } & {
        type: "timeSlider";
        config: Readonly<{
            start_percentage_of_time_range?: number | undefined;
            end_percentage_of_time_range?: number | undefined;
            is_anchored?: boolean | undefined;
        } & {}>;
    }> | Readonly<{
        uid?: string | undefined;
        width?: "small" | "medium" | "large" | undefined;
        grow?: boolean | undefined;
    } & {
        type: "esqlControl";
        config: Readonly<{
            title?: string | undefined;
            display_settings?: Readonly<{
                placeholder?: string | undefined;
                hide_action_bar?: boolean | undefined;
                hide_exclude?: boolean | undefined;
                hide_exists?: boolean | undefined;
                hide_sort?: boolean | undefined;
            } & {}> | undefined;
            single_select?: boolean | undefined;
            available_options?: string[] | undefined;
        } & {
            selected_options: string[];
            variable_name: string;
            variable_type: "fields" | "values" | "functions" | "time_literal" | "multi_values";
            esql_query: string;
            control_type: "STATIC_VALUES" | "VALUES_FROM_QUERY";
        }>;
    }>>(panelPackage: PanelPackage<State>) => Promise<import("@kbn/embeddable-plugin/public").DefaultEmbeddableApi<object> | undefined>;
    replacePanel: <State extends PinnedControlState = Readonly<{
        uid?: string | undefined;
        width?: "small" | "medium" | "large" | undefined;
        grow?: boolean | undefined;
    } & {
        type: "optionsListControl";
        config: Readonly<{
            title?: string | undefined;
            use_global_filters?: boolean | undefined;
            ignore_validations?: boolean | undefined;
            display_settings?: Readonly<{
                placeholder?: string | undefined;
                hide_action_bar?: boolean | undefined;
                hide_exclude?: boolean | undefined;
                hide_exists?: boolean | undefined;
                hide_sort?: boolean | undefined;
            } & {}> | undefined;
            single_select?: boolean | undefined;
            exclude?: boolean | undefined;
            exists_selected?: boolean | undefined;
            run_past_timeout?: boolean | undefined;
            search_technique?: "prefix" | "wildcard" | "exact" | undefined;
            selected_options?: (string | number)[] | undefined;
            sort?: Readonly<{} & {
                by: "_count" | "_key";
                direction: "asc" | "desc";
            }> | undefined;
        } & {
            data_view_id: string;
            field_name: string;
        }>;
    }> | Readonly<{
        uid?: string | undefined;
        width?: "small" | "medium" | "large" | undefined;
        grow?: boolean | undefined;
    } & {
        type: "rangeSliderControl";
        config: Readonly<{
            title?: string | undefined;
            use_global_filters?: boolean | undefined;
            ignore_validations?: boolean | undefined;
            value?: string[] | undefined;
            step?: number | undefined;
        } & {
            data_view_id: string;
            field_name: string;
        }>;
    }> | Readonly<{
        uid?: string | undefined;
        width?: "small" | "medium" | "large" | undefined;
        grow?: boolean | undefined;
    } & {
        type: "timeSlider";
        config: Readonly<{
            start_percentage_of_time_range?: number | undefined;
            end_percentage_of_time_range?: number | undefined;
            is_anchored?: boolean | undefined;
        } & {}>;
    }> | Readonly<{
        uid?: string | undefined;
        width?: "small" | "medium" | "large" | undefined;
        grow?: boolean | undefined;
    } & {
        type: "esqlControl";
        config: Readonly<{
            title?: string | undefined;
            display_settings?: Readonly<{
                placeholder?: string | undefined;
                hide_action_bar?: boolean | undefined;
                hide_exclude?: boolean | undefined;
                hide_exists?: boolean | undefined;
                hide_sort?: boolean | undefined;
            } & {}> | undefined;
            single_select?: boolean | undefined;
            available_options?: string[] | undefined;
        } & {
            selected_options: string[];
            variable_name: string;
            variable_type: "fields" | "values" | "functions" | "time_literal" | "multi_values";
            esql_query: string;
            control_type: "STATIC_VALUES" | "VALUES_FROM_QUERY";
        }>;
    }>>(idToRemove: string, newPanel: PanelPackage<State>) => Promise<string>;
    removePanel: (idToRemove: string) => void;
    childrenLoading$: import("rxjs").Observable<boolean>;
} | undefined;
