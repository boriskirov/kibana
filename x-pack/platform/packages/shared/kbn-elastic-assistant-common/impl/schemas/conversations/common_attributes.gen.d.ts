import { z } from '@kbn/zod';
/**
 * Trace Data
 */
export type TraceData = z.infer<typeof TraceData>;
export declare const TraceData: z.ZodObject<{
    /**
     * Could be any string, not necessarily a UUID
     */
    transactionId: z.ZodOptional<z.ZodString>;
    /**
     * Could be any string, not necessarily a UUID
     */
    traceId: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    transactionId?: string | undefined;
    traceId?: string | undefined;
}, {
    transactionId?: string | undefined;
    traceId?: string | undefined;
}>;
/**
 * The type of interrupt
 */
export type InterruptType = z.infer<typeof InterruptType>;
export declare const InterruptType: z.ZodEnum<["SELECT_OPTION", "INPUT_TEXT"]>;
export type InterruptTypeEnum = typeof InterruptType.enum;
export declare const InterruptTypeEnum: z.Values<["SELECT_OPTION", "INPUT_TEXT"]>;
/**
 * The basis of an agent interrupt
 */
export type BaseInterruptValue = z.infer<typeof BaseInterruptValue>;
export declare const BaseInterruptValue: z.ZodObject<{
    /**
     * Type of the interrupt
     */
    type: z.ZodEnum<["SELECT_OPTION", "INPUT_TEXT"]>;
    /**
     * Whether the interrupt has expired and can no longer be resumed.
     */
    expired: z.ZodOptional<z.ZodBoolean>;
    /**
     * Thread ID of the graph execution that produced this message.
     */
    threadId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: "SELECT_OPTION" | "INPUT_TEXT";
    threadId: string;
    expired?: boolean | undefined;
}, {
    type: "SELECT_OPTION" | "INPUT_TEXT";
    threadId: string;
    expired?: boolean | undefined;
}>;
/**
 * The basis of an interrupt resume value
 */
export type BaseInterruptResumeValue = z.infer<typeof BaseInterruptResumeValue>;
export declare const BaseInterruptResumeValue: z.ZodObject<{
    /**
     * Type of the resume value
     */
    type: z.ZodEnum<["SELECT_OPTION", "INPUT_TEXT"]>;
}, "strip", z.ZodTypeAny, {
    type: "SELECT_OPTION" | "INPUT_TEXT";
}, {
    type: "SELECT_OPTION" | "INPUT_TEXT";
}>;
/**
 * A request approval option
 */
export type SelectOptionInterruptOption = z.infer<typeof SelectOptionInterruptOption>;
export declare const SelectOptionInterruptOption: z.ZodObject<{
    label: z.ZodString;
    value: z.ZodString;
    buttonColor: z.ZodOptional<z.ZodEnum<["text", "accent", "accentSecondary", "primary", "success", "warning", "danger", "neutral", "risk"]>>;
}, "strip", z.ZodTypeAny, {
    value: string;
    label: string;
    buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
}, {
    value: string;
    label: string;
    buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
}>;
/**
 * Interrupt that requests user to select one of the provided options
 */
export type SelectOptionInterruptValue = z.infer<typeof SelectOptionInterruptValue>;
export declare const SelectOptionInterruptValue: z.ZodObject<{
    expired: z.ZodOptional<z.ZodBoolean>;
    threadId: z.ZodString;
} & {
    type: z.ZodLiteral<"SELECT_OPTION">;
    description: z.ZodString;
    options: z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        value: z.ZodString;
        buttonColor: z.ZodOptional<z.ZodEnum<["text", "accent", "accentSecondary", "primary", "success", "warning", "danger", "neutral", "risk"]>>;
    }, "strip", z.ZodTypeAny, {
        value: string;
        label: string;
        buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
    }, {
        value: string;
        label: string;
        buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    type: "SELECT_OPTION";
    options: {
        value: string;
        label: string;
        buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
    }[];
    description: string;
    threadId: string;
    expired?: boolean | undefined;
}, {
    type: "SELECT_OPTION";
    options: {
        value: string;
        label: string;
        buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
    }[];
    description: string;
    threadId: string;
    expired?: boolean | undefined;
}>;
/**
 * A request approval resume schema
 */
export type SelectOptionInterruptResumeValue = z.infer<typeof SelectOptionInterruptResumeValue>;
export declare const SelectOptionInterruptResumeValue: z.ZodObject<{} & {
    type: z.ZodLiteral<"SELECT_OPTION">;
    value: z.ZodString;
}, "strip", z.ZodTypeAny, {
    value: string;
    type: "SELECT_OPTION";
}, {
    value: string;
    type: "SELECT_OPTION";
}>;
/**
 * A request approval interrupt
 */
export type SelectOptionInterrupt = z.infer<typeof SelectOptionInterrupt>;
export declare const SelectOptionInterrupt: z.ZodObject<{
    /**
     * The interrupt value
     */
    interruptValue: z.ZodObject<{
        expired: z.ZodOptional<z.ZodBoolean>;
        threadId: z.ZodString;
    } & {
        type: z.ZodLiteral<"SELECT_OPTION">;
        description: z.ZodString;
        options: z.ZodArray<z.ZodObject<{
            label: z.ZodString;
            value: z.ZodString;
            buttonColor: z.ZodOptional<z.ZodEnum<["text", "accent", "accentSecondary", "primary", "success", "warning", "danger", "neutral", "risk"]>>;
        }, "strip", z.ZodTypeAny, {
            value: string;
            label: string;
            buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
        }, {
            value: string;
            label: string;
            buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        type: "SELECT_OPTION";
        options: {
            value: string;
            label: string;
            buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
        }[];
        description: string;
        threadId: string;
        expired?: boolean | undefined;
    }, {
        type: "SELECT_OPTION";
        options: {
            value: string;
            label: string;
            buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
        }[];
        description: string;
        threadId: string;
        expired?: boolean | undefined;
    }>;
    /**
     * The resume value
     */
    resumeValue: z.ZodObject<{} & {
        type: z.ZodLiteral<"SELECT_OPTION">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        type: "SELECT_OPTION";
    }, {
        value: string;
        type: "SELECT_OPTION";
    }>;
}, "strip", z.ZodTypeAny, {
    interruptValue: {
        type: "SELECT_OPTION";
        options: {
            value: string;
            label: string;
            buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
        }[];
        description: string;
        threadId: string;
        expired?: boolean | undefined;
    };
    resumeValue: {
        value: string;
        type: "SELECT_OPTION";
    };
}, {
    interruptValue: {
        type: "SELECT_OPTION";
        options: {
            value: string;
            label: string;
            buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
        }[];
        description: string;
        threadId: string;
        expired?: boolean | undefined;
    };
    resumeValue: {
        value: string;
        type: "SELECT_OPTION";
    };
}>;
/**
 * Interrupt that requests user to provide text input
 */
export type InputTextInterruptValue = z.infer<typeof InputTextInterruptValue>;
export declare const InputTextInterruptValue: z.ZodObject<{
    expired: z.ZodOptional<z.ZodBoolean>;
    threadId: z.ZodString;
} & {
    type: z.ZodLiteral<"INPUT_TEXT">;
    description: z.ZodOptional<z.ZodString>;
    placeholder: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type: "INPUT_TEXT";
    threadId: string;
    placeholder?: string | undefined;
    description?: string | undefined;
    expired?: boolean | undefined;
}, {
    type: "INPUT_TEXT";
    threadId: string;
    placeholder?: string | undefined;
    description?: string | undefined;
    expired?: boolean | undefined;
}>;
/**
 * A resume value for input text
 */
export type InputTextInterruptResumeValue = z.infer<typeof InputTextInterruptResumeValue>;
export declare const InputTextInterruptResumeValue: z.ZodObject<{} & {
    type: z.ZodLiteral<"INPUT_TEXT">;
    value: z.ZodString;
}, "strip", z.ZodTypeAny, {
    value: string;
    type: "INPUT_TEXT";
}, {
    value: string;
    type: "INPUT_TEXT";
}>;
/**
 * A request text interrupt
 */
export type InputTextInterrupt = z.infer<typeof InputTextInterrupt>;
export declare const InputTextInterrupt: z.ZodObject<{
    /**
     * The interrupt value
     */
    interruptValue: z.ZodObject<{
        expired: z.ZodOptional<z.ZodBoolean>;
        threadId: z.ZodString;
    } & {
        type: z.ZodLiteral<"INPUT_TEXT">;
        description: z.ZodOptional<z.ZodString>;
        placeholder: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "INPUT_TEXT";
        threadId: string;
        placeholder?: string | undefined;
        description?: string | undefined;
        expired?: boolean | undefined;
    }, {
        type: "INPUT_TEXT";
        threadId: string;
        placeholder?: string | undefined;
        description?: string | undefined;
        expired?: boolean | undefined;
    }>;
    /**
     * The resume value
     */
    resumeValue: z.ZodObject<{} & {
        type: z.ZodLiteral<"INPUT_TEXT">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        type: "INPUT_TEXT";
    }, {
        value: string;
        type: "INPUT_TEXT";
    }>;
}, "strip", z.ZodTypeAny, {
    interruptValue: {
        type: "INPUT_TEXT";
        threadId: string;
        placeholder?: string | undefined;
        description?: string | undefined;
        expired?: boolean | undefined;
    };
    resumeValue: {
        value: string;
        type: "INPUT_TEXT";
    };
}, {
    interruptValue: {
        type: "INPUT_TEXT";
        threadId: string;
        placeholder?: string | undefined;
        description?: string | undefined;
        expired?: boolean | undefined;
    };
    resumeValue: {
        value: string;
        type: "INPUT_TEXT";
    };
}>;
/**
 * Union of the interrupt values
 */
export type InterruptValue = z.infer<typeof InterruptValue>;
export declare const InterruptValue: z.ZodUnion<[z.ZodObject<{
    expired: z.ZodOptional<z.ZodBoolean>;
    threadId: z.ZodString;
} & {
    type: z.ZodLiteral<"SELECT_OPTION">;
    description: z.ZodString;
    options: z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        value: z.ZodString;
        buttonColor: z.ZodOptional<z.ZodEnum<["text", "accent", "accentSecondary", "primary", "success", "warning", "danger", "neutral", "risk"]>>;
    }, "strip", z.ZodTypeAny, {
        value: string;
        label: string;
        buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
    }, {
        value: string;
        label: string;
        buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    type: "SELECT_OPTION";
    options: {
        value: string;
        label: string;
        buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
    }[];
    description: string;
    threadId: string;
    expired?: boolean | undefined;
}, {
    type: "SELECT_OPTION";
    options: {
        value: string;
        label: string;
        buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
    }[];
    description: string;
    threadId: string;
    expired?: boolean | undefined;
}>, z.ZodObject<{
    expired: z.ZodOptional<z.ZodBoolean>;
    threadId: z.ZodString;
} & {
    type: z.ZodLiteral<"INPUT_TEXT">;
    description: z.ZodOptional<z.ZodString>;
    placeholder: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type: "INPUT_TEXT";
    threadId: string;
    placeholder?: string | undefined;
    description?: string | undefined;
    expired?: boolean | undefined;
}, {
    type: "INPUT_TEXT";
    threadId: string;
    placeholder?: string | undefined;
    description?: string | undefined;
    expired?: boolean | undefined;
}>]>;
/**
 * Union of the interrupt resume values
 */
export type InterruptResumeValue = z.infer<typeof InterruptResumeValue>;
export declare const InterruptResumeValue: z.ZodUnion<[z.ZodObject<{} & {
    type: z.ZodLiteral<"SELECT_OPTION">;
    value: z.ZodString;
}, "strip", z.ZodTypeAny, {
    value: string;
    type: "SELECT_OPTION";
}, {
    value: string;
    type: "SELECT_OPTION";
}>, z.ZodObject<{} & {
    type: z.ZodLiteral<"INPUT_TEXT">;
    value: z.ZodString;
}, "strip", z.ZodTypeAny, {
    value: string;
    type: "INPUT_TEXT";
}, {
    value: string;
    type: "INPUT_TEXT";
}>]>;
/**
 * The basis of a content reference
 */
export type BaseContentReference = z.infer<typeof BaseContentReference>;
export declare const BaseContentReference: z.ZodObject<{
    /**
     * Id of the content reference
     */
    id: z.ZodString;
    /**
     * Type of the content reference
     */
    type: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    type: string;
}, {
    id: string;
    type: string;
}>;
/**
 * References a knowledge base entry
 */
export type KnowledgeBaseEntryContentReference = z.infer<typeof KnowledgeBaseEntryContentReference>;
export declare const KnowledgeBaseEntryContentReference: z.ZodObject<{
    id: z.ZodString;
} & {
    type: z.ZodLiteral<"KnowledgeBaseEntry">;
    knowledgeBaseEntryId: z.ZodString;
    knowledgeBaseEntryName: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    type: "KnowledgeBaseEntry";
    knowledgeBaseEntryId: string;
    knowledgeBaseEntryName: string;
}, {
    id: string;
    type: "KnowledgeBaseEntry";
    knowledgeBaseEntryId: string;
    knowledgeBaseEntryName: string;
}>;
/**
 * References an ESQL query
 */
export type EsqlContentReference = z.infer<typeof EsqlContentReference>;
export declare const EsqlContentReference: z.ZodObject<{
    id: z.ZodString;
} & {
    type: z.ZodLiteral<"EsqlQuery">;
    query: z.ZodString;
    label: z.ZodString;
    timerange: z.ZodOptional<z.ZodObject<{
        from: z.ZodString;
        to: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        from: string;
        to: string;
    }, {
        from: string;
        to: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    label: string;
    id: string;
    type: "EsqlQuery";
    query: string;
    timerange?: {
        from: string;
        to: string;
    } | undefined;
}, {
    label: string;
    id: string;
    type: "EsqlQuery";
    query: string;
    timerange?: {
        from: string;
        to: string;
    } | undefined;
}>;
/**
 * References a security alert
 */
export type SecurityAlertContentReference = z.infer<typeof SecurityAlertContentReference>;
export declare const SecurityAlertContentReference: z.ZodObject<{
    id: z.ZodString;
} & {
    type: z.ZodLiteral<"SecurityAlert">;
    alertId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    type: "SecurityAlert";
    alertId: string;
}, {
    id: string;
    type: "SecurityAlert";
    alertId: string;
}>;
/**
 * References an external URL
 */
export type HrefContentReference = z.infer<typeof HrefContentReference>;
export declare const HrefContentReference: z.ZodObject<{
    id: z.ZodString;
} & {
    type: z.ZodLiteral<"Href">;
    label: z.ZodOptional<z.ZodString>;
    href: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    type: "Href";
    href: string;
    label?: string | undefined;
}, {
    id: string;
    type: "Href";
    href: string;
    label?: string | undefined;
}>;
/**
 * References the security alerts page
 */
export type SecurityAlertsPageContentReference = z.infer<typeof SecurityAlertsPageContentReference>;
export declare const SecurityAlertsPageContentReference: z.ZodObject<{
    id: z.ZodString;
} & {
    type: z.ZodLiteral<"SecurityAlertsPage">;
}, "strip", z.ZodTypeAny, {
    id: string;
    type: "SecurityAlertsPage";
}, {
    id: string;
    type: "SecurityAlertsPage";
}>;
/**
 * References the product documentation
 */
export type ProductDocumentationContentReference = z.infer<typeof ProductDocumentationContentReference>;
export declare const ProductDocumentationContentReference: z.ZodObject<{
    id: z.ZodString;
} & {
    type: z.ZodLiteral<"ProductDocumentation">;
    title: z.ZodString;
    url: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title: string;
    id: string;
    type: "ProductDocumentation";
    url: string;
}, {
    title: string;
    id: string;
    type: "ProductDocumentation";
    url: string;
}>;
/**
 * A content reference
 */
export declare const ContentReferenceInternal: z.ZodUnion<[z.ZodObject<{
    id: z.ZodString;
} & {
    type: z.ZodLiteral<"KnowledgeBaseEntry">;
    knowledgeBaseEntryId: z.ZodString;
    knowledgeBaseEntryName: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    type: "KnowledgeBaseEntry";
    knowledgeBaseEntryId: string;
    knowledgeBaseEntryName: string;
}, {
    id: string;
    type: "KnowledgeBaseEntry";
    knowledgeBaseEntryId: string;
    knowledgeBaseEntryName: string;
}>, z.ZodObject<{
    id: z.ZodString;
} & {
    type: z.ZodLiteral<"SecurityAlert">;
    alertId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    type: "SecurityAlert";
    alertId: string;
}, {
    id: string;
    type: "SecurityAlert";
    alertId: string;
}>, z.ZodObject<{
    id: z.ZodString;
} & {
    type: z.ZodLiteral<"SecurityAlertsPage">;
}, "strip", z.ZodTypeAny, {
    id: string;
    type: "SecurityAlertsPage";
}, {
    id: string;
    type: "SecurityAlertsPage";
}>, z.ZodObject<{
    id: z.ZodString;
} & {
    type: z.ZodLiteral<"ProductDocumentation">;
    title: z.ZodString;
    url: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title: string;
    id: string;
    type: "ProductDocumentation";
    url: string;
}, {
    title: string;
    id: string;
    type: "ProductDocumentation";
    url: string;
}>, z.ZodObject<{
    id: z.ZodString;
} & {
    type: z.ZodLiteral<"EsqlQuery">;
    query: z.ZodString;
    label: z.ZodString;
    timerange: z.ZodOptional<z.ZodObject<{
        from: z.ZodString;
        to: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        from: string;
        to: string;
    }, {
        from: string;
        to: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    label: string;
    id: string;
    type: "EsqlQuery";
    query: string;
    timerange?: {
        from: string;
        to: string;
    } | undefined;
}, {
    label: string;
    id: string;
    type: "EsqlQuery";
    query: string;
    timerange?: {
        from: string;
        to: string;
    } | undefined;
}>, z.ZodObject<{
    id: z.ZodString;
} & {
    type: z.ZodLiteral<"Href">;
    label: z.ZodOptional<z.ZodString>;
    href: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    type: "Href";
    href: string;
    label?: string | undefined;
}, {
    id: string;
    type: "Href";
    href: string;
    label?: string | undefined;
}>]>;
export type ContentReference = z.infer<typeof ContentReferenceInternal>;
export declare const ContentReference: z.ZodType<ContentReference>;
/**
 * A union of all content reference types
 */
export type ContentReferences = z.infer<typeof ContentReferences>;
export declare const ContentReferences: z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodObject<{
    id: z.ZodString;
} & {
    type: z.ZodLiteral<"KnowledgeBaseEntry">;
    knowledgeBaseEntryId: z.ZodString;
    knowledgeBaseEntryName: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    type: "KnowledgeBaseEntry";
    knowledgeBaseEntryId: string;
    knowledgeBaseEntryName: string;
}, {
    id: string;
    type: "KnowledgeBaseEntry";
    knowledgeBaseEntryId: string;
    knowledgeBaseEntryName: string;
}>, z.ZodObject<{
    id: z.ZodString;
} & {
    type: z.ZodLiteral<"SecurityAlert">;
    alertId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    type: "SecurityAlert";
    alertId: string;
}, {
    id: string;
    type: "SecurityAlert";
    alertId: string;
}>, z.ZodObject<{
    id: z.ZodString;
} & {
    type: z.ZodLiteral<"SecurityAlertsPage">;
}, "strip", z.ZodTypeAny, {
    id: string;
    type: "SecurityAlertsPage";
}, {
    id: string;
    type: "SecurityAlertsPage";
}>, z.ZodObject<{
    id: z.ZodString;
} & {
    type: z.ZodLiteral<"ProductDocumentation">;
    title: z.ZodString;
    url: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title: string;
    id: string;
    type: "ProductDocumentation";
    url: string;
}, {
    title: string;
    id: string;
    type: "ProductDocumentation";
    url: string;
}>, z.ZodObject<{
    id: z.ZodString;
} & {
    type: z.ZodLiteral<"EsqlQuery">;
    query: z.ZodString;
    label: z.ZodString;
    timerange: z.ZodOptional<z.ZodObject<{
        from: z.ZodString;
        to: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        from: string;
        to: string;
    }, {
        from: string;
        to: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    label: string;
    id: string;
    type: "EsqlQuery";
    query: string;
    timerange?: {
        from: string;
        to: string;
    } | undefined;
}, {
    label: string;
    id: string;
    type: "EsqlQuery";
    query: string;
    timerange?: {
        from: string;
        to: string;
    } | undefined;
}>, z.ZodObject<{
    id: z.ZodString;
} & {
    type: z.ZodLiteral<"Href">;
    label: z.ZodOptional<z.ZodString>;
    href: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    type: "Href";
    href: string;
    label?: string | undefined;
}, {
    id: string;
    type: "Href";
    href: string;
    label?: string | undefined;
}>]>, z.objectOutputType<{}, z.ZodUnion<[z.ZodObject<{
    id: z.ZodString;
} & {
    type: z.ZodLiteral<"KnowledgeBaseEntry">;
    knowledgeBaseEntryId: z.ZodString;
    knowledgeBaseEntryName: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    type: "KnowledgeBaseEntry";
    knowledgeBaseEntryId: string;
    knowledgeBaseEntryName: string;
}, {
    id: string;
    type: "KnowledgeBaseEntry";
    knowledgeBaseEntryId: string;
    knowledgeBaseEntryName: string;
}>, z.ZodObject<{
    id: z.ZodString;
} & {
    type: z.ZodLiteral<"SecurityAlert">;
    alertId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    type: "SecurityAlert";
    alertId: string;
}, {
    id: string;
    type: "SecurityAlert";
    alertId: string;
}>, z.ZodObject<{
    id: z.ZodString;
} & {
    type: z.ZodLiteral<"SecurityAlertsPage">;
}, "strip", z.ZodTypeAny, {
    id: string;
    type: "SecurityAlertsPage";
}, {
    id: string;
    type: "SecurityAlertsPage";
}>, z.ZodObject<{
    id: z.ZodString;
} & {
    type: z.ZodLiteral<"ProductDocumentation">;
    title: z.ZodString;
    url: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title: string;
    id: string;
    type: "ProductDocumentation";
    url: string;
}, {
    title: string;
    id: string;
    type: "ProductDocumentation";
    url: string;
}>, z.ZodObject<{
    id: z.ZodString;
} & {
    type: z.ZodLiteral<"EsqlQuery">;
    query: z.ZodString;
    label: z.ZodString;
    timerange: z.ZodOptional<z.ZodObject<{
        from: z.ZodString;
        to: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        from: string;
        to: string;
    }, {
        from: string;
        to: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    label: string;
    id: string;
    type: "EsqlQuery";
    query: string;
    timerange?: {
        from: string;
        to: string;
    } | undefined;
}, {
    label: string;
    id: string;
    type: "EsqlQuery";
    query: string;
    timerange?: {
        from: string;
        to: string;
    } | undefined;
}>, z.ZodObject<{
    id: z.ZodString;
} & {
    type: z.ZodLiteral<"Href">;
    label: z.ZodOptional<z.ZodString>;
    href: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    type: "Href";
    href: string;
    label?: string | undefined;
}, {
    id: string;
    type: "Href";
    href: string;
    label?: string | undefined;
}>]>, "strip">, z.objectInputType<{}, z.ZodUnion<[z.ZodObject<{
    id: z.ZodString;
} & {
    type: z.ZodLiteral<"KnowledgeBaseEntry">;
    knowledgeBaseEntryId: z.ZodString;
    knowledgeBaseEntryName: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    type: "KnowledgeBaseEntry";
    knowledgeBaseEntryId: string;
    knowledgeBaseEntryName: string;
}, {
    id: string;
    type: "KnowledgeBaseEntry";
    knowledgeBaseEntryId: string;
    knowledgeBaseEntryName: string;
}>, z.ZodObject<{
    id: z.ZodString;
} & {
    type: z.ZodLiteral<"SecurityAlert">;
    alertId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    type: "SecurityAlert";
    alertId: string;
}, {
    id: string;
    type: "SecurityAlert";
    alertId: string;
}>, z.ZodObject<{
    id: z.ZodString;
} & {
    type: z.ZodLiteral<"SecurityAlertsPage">;
}, "strip", z.ZodTypeAny, {
    id: string;
    type: "SecurityAlertsPage";
}, {
    id: string;
    type: "SecurityAlertsPage";
}>, z.ZodObject<{
    id: z.ZodString;
} & {
    type: z.ZodLiteral<"ProductDocumentation">;
    title: z.ZodString;
    url: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title: string;
    id: string;
    type: "ProductDocumentation";
    url: string;
}, {
    title: string;
    id: string;
    type: "ProductDocumentation";
    url: string;
}>, z.ZodObject<{
    id: z.ZodString;
} & {
    type: z.ZodLiteral<"EsqlQuery">;
    query: z.ZodString;
    label: z.ZodString;
    timerange: z.ZodOptional<z.ZodObject<{
        from: z.ZodString;
        to: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        from: string;
        to: string;
    }, {
        from: string;
        to: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    label: string;
    id: string;
    type: "EsqlQuery";
    query: string;
    timerange?: {
        from: string;
        to: string;
    } | undefined;
}, {
    label: string;
    id: string;
    type: "EsqlQuery";
    query: string;
    timerange?: {
        from: string;
        to: string;
    } | undefined;
}>, z.ZodObject<{
    id: z.ZodString;
} & {
    type: z.ZodLiteral<"Href">;
    label: z.ZodOptional<z.ZodString>;
    href: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    type: "Href";
    href: string;
    label?: string | undefined;
}, {
    id: string;
    type: "Href";
    href: string;
    label?: string | undefined;
}>]>, "strip">>;
/**
 * Message metadata
 */
export type MessageMetadata = z.infer<typeof MessageMetadata>;
export declare const MessageMetadata: z.ZodObject<{
    /**
     * Data referred to by the message content.
     */
    contentReferences: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodObject<{
        id: z.ZodString;
    } & {
        type: z.ZodLiteral<"KnowledgeBaseEntry">;
        knowledgeBaseEntryId: z.ZodString;
        knowledgeBaseEntryName: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        type: "KnowledgeBaseEntry";
        knowledgeBaseEntryId: string;
        knowledgeBaseEntryName: string;
    }, {
        id: string;
        type: "KnowledgeBaseEntry";
        knowledgeBaseEntryId: string;
        knowledgeBaseEntryName: string;
    }>, z.ZodObject<{
        id: z.ZodString;
    } & {
        type: z.ZodLiteral<"SecurityAlert">;
        alertId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        type: "SecurityAlert";
        alertId: string;
    }, {
        id: string;
        type: "SecurityAlert";
        alertId: string;
    }>, z.ZodObject<{
        id: z.ZodString;
    } & {
        type: z.ZodLiteral<"SecurityAlertsPage">;
    }, "strip", z.ZodTypeAny, {
        id: string;
        type: "SecurityAlertsPage";
    }, {
        id: string;
        type: "SecurityAlertsPage";
    }>, z.ZodObject<{
        id: z.ZodString;
    } & {
        type: z.ZodLiteral<"ProductDocumentation">;
        title: z.ZodString;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        title: string;
        id: string;
        type: "ProductDocumentation";
        url: string;
    }, {
        title: string;
        id: string;
        type: "ProductDocumentation";
        url: string;
    }>, z.ZodObject<{
        id: z.ZodString;
    } & {
        type: z.ZodLiteral<"EsqlQuery">;
        query: z.ZodString;
        label: z.ZodString;
        timerange: z.ZodOptional<z.ZodObject<{
            from: z.ZodString;
            to: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            from: string;
            to: string;
        }, {
            from: string;
            to: string;
        }>>;
    }, "strip", z.ZodTypeAny, {
        label: string;
        id: string;
        type: "EsqlQuery";
        query: string;
        timerange?: {
            from: string;
            to: string;
        } | undefined;
    }, {
        label: string;
        id: string;
        type: "EsqlQuery";
        query: string;
        timerange?: {
            from: string;
            to: string;
        } | undefined;
    }>, z.ZodObject<{
        id: z.ZodString;
    } & {
        type: z.ZodLiteral<"Href">;
        label: z.ZodOptional<z.ZodString>;
        href: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        type: "Href";
        href: string;
        label?: string | undefined;
    }, {
        id: string;
        type: "Href";
        href: string;
        label?: string | undefined;
    }>]>, z.objectOutputType<{}, z.ZodUnion<[z.ZodObject<{
        id: z.ZodString;
    } & {
        type: z.ZodLiteral<"KnowledgeBaseEntry">;
        knowledgeBaseEntryId: z.ZodString;
        knowledgeBaseEntryName: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        type: "KnowledgeBaseEntry";
        knowledgeBaseEntryId: string;
        knowledgeBaseEntryName: string;
    }, {
        id: string;
        type: "KnowledgeBaseEntry";
        knowledgeBaseEntryId: string;
        knowledgeBaseEntryName: string;
    }>, z.ZodObject<{
        id: z.ZodString;
    } & {
        type: z.ZodLiteral<"SecurityAlert">;
        alertId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        type: "SecurityAlert";
        alertId: string;
    }, {
        id: string;
        type: "SecurityAlert";
        alertId: string;
    }>, z.ZodObject<{
        id: z.ZodString;
    } & {
        type: z.ZodLiteral<"SecurityAlertsPage">;
    }, "strip", z.ZodTypeAny, {
        id: string;
        type: "SecurityAlertsPage";
    }, {
        id: string;
        type: "SecurityAlertsPage";
    }>, z.ZodObject<{
        id: z.ZodString;
    } & {
        type: z.ZodLiteral<"ProductDocumentation">;
        title: z.ZodString;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        title: string;
        id: string;
        type: "ProductDocumentation";
        url: string;
    }, {
        title: string;
        id: string;
        type: "ProductDocumentation";
        url: string;
    }>, z.ZodObject<{
        id: z.ZodString;
    } & {
        type: z.ZodLiteral<"EsqlQuery">;
        query: z.ZodString;
        label: z.ZodString;
        timerange: z.ZodOptional<z.ZodObject<{
            from: z.ZodString;
            to: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            from: string;
            to: string;
        }, {
            from: string;
            to: string;
        }>>;
    }, "strip", z.ZodTypeAny, {
        label: string;
        id: string;
        type: "EsqlQuery";
        query: string;
        timerange?: {
            from: string;
            to: string;
        } | undefined;
    }, {
        label: string;
        id: string;
        type: "EsqlQuery";
        query: string;
        timerange?: {
            from: string;
            to: string;
        } | undefined;
    }>, z.ZodObject<{
        id: z.ZodString;
    } & {
        type: z.ZodLiteral<"Href">;
        label: z.ZodOptional<z.ZodString>;
        href: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        type: "Href";
        href: string;
        label?: string | undefined;
    }, {
        id: string;
        type: "Href";
        href: string;
        label?: string | undefined;
    }>]>, "strip">, z.objectInputType<{}, z.ZodUnion<[z.ZodObject<{
        id: z.ZodString;
    } & {
        type: z.ZodLiteral<"KnowledgeBaseEntry">;
        knowledgeBaseEntryId: z.ZodString;
        knowledgeBaseEntryName: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        type: "KnowledgeBaseEntry";
        knowledgeBaseEntryId: string;
        knowledgeBaseEntryName: string;
    }, {
        id: string;
        type: "KnowledgeBaseEntry";
        knowledgeBaseEntryId: string;
        knowledgeBaseEntryName: string;
    }>, z.ZodObject<{
        id: z.ZodString;
    } & {
        type: z.ZodLiteral<"SecurityAlert">;
        alertId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        type: "SecurityAlert";
        alertId: string;
    }, {
        id: string;
        type: "SecurityAlert";
        alertId: string;
    }>, z.ZodObject<{
        id: z.ZodString;
    } & {
        type: z.ZodLiteral<"SecurityAlertsPage">;
    }, "strip", z.ZodTypeAny, {
        id: string;
        type: "SecurityAlertsPage";
    }, {
        id: string;
        type: "SecurityAlertsPage";
    }>, z.ZodObject<{
        id: z.ZodString;
    } & {
        type: z.ZodLiteral<"ProductDocumentation">;
        title: z.ZodString;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        title: string;
        id: string;
        type: "ProductDocumentation";
        url: string;
    }, {
        title: string;
        id: string;
        type: "ProductDocumentation";
        url: string;
    }>, z.ZodObject<{
        id: z.ZodString;
    } & {
        type: z.ZodLiteral<"EsqlQuery">;
        query: z.ZodString;
        label: z.ZodString;
        timerange: z.ZodOptional<z.ZodObject<{
            from: z.ZodString;
            to: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            from: string;
            to: string;
        }, {
            from: string;
            to: string;
        }>>;
    }, "strip", z.ZodTypeAny, {
        label: string;
        id: string;
        type: "EsqlQuery";
        query: string;
        timerange?: {
            from: string;
            to: string;
        } | undefined;
    }, {
        label: string;
        id: string;
        type: "EsqlQuery";
        query: string;
        timerange?: {
            from: string;
            to: string;
        } | undefined;
    }>, z.ZodObject<{
        id: z.ZodString;
    } & {
        type: z.ZodLiteral<"Href">;
        label: z.ZodOptional<z.ZodString>;
        href: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        type: "Href";
        href: string;
        label?: string | undefined;
    }, {
        id: string;
        type: "Href";
        href: string;
        label?: string | undefined;
    }>]>, "strip">>>;
    /**
     * When the agent is interrupted (for example, when user input is required), this field is populated with the details of the interrupt. Messages containing interruptValues in the metadata are excluded from the LLM context.
     */
    interruptValue: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
        expired: z.ZodOptional<z.ZodBoolean>;
        threadId: z.ZodString;
    } & {
        type: z.ZodLiteral<"SELECT_OPTION">;
        description: z.ZodString;
        options: z.ZodArray<z.ZodObject<{
            label: z.ZodString;
            value: z.ZodString;
            buttonColor: z.ZodOptional<z.ZodEnum<["text", "accent", "accentSecondary", "primary", "success", "warning", "danger", "neutral", "risk"]>>;
        }, "strip", z.ZodTypeAny, {
            value: string;
            label: string;
            buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
        }, {
            value: string;
            label: string;
            buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        type: "SELECT_OPTION";
        options: {
            value: string;
            label: string;
            buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
        }[];
        description: string;
        threadId: string;
        expired?: boolean | undefined;
    }, {
        type: "SELECT_OPTION";
        options: {
            value: string;
            label: string;
            buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
        }[];
        description: string;
        threadId: string;
        expired?: boolean | undefined;
    }>, z.ZodObject<{
        expired: z.ZodOptional<z.ZodBoolean>;
        threadId: z.ZodString;
    } & {
        type: z.ZodLiteral<"INPUT_TEXT">;
        description: z.ZodOptional<z.ZodString>;
        placeholder: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "INPUT_TEXT";
        threadId: string;
        placeholder?: string | undefined;
        description?: string | undefined;
        expired?: boolean | undefined;
    }, {
        type: "INPUT_TEXT";
        threadId: string;
        placeholder?: string | undefined;
        description?: string | undefined;
        expired?: boolean | undefined;
    }>]>>;
    /**
     * When the agent is resumed after an interrupt, this field is populated with the details of the resume value.
     */
    interruptResumeValue: z.ZodOptional<z.ZodUnion<[z.ZodObject<{} & {
        type: z.ZodLiteral<"SELECT_OPTION">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        type: "SELECT_OPTION";
    }, {
        value: string;
        type: "SELECT_OPTION";
    }>, z.ZodObject<{} & {
        type: z.ZodLiteral<"INPUT_TEXT">;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        type: "INPUT_TEXT";
    }, {
        value: string;
        type: "INPUT_TEXT";
    }>]>>;
}, "strip", z.ZodTypeAny, {
    interruptValue?: {
        type: "SELECT_OPTION";
        options: {
            value: string;
            label: string;
            buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
        }[];
        description: string;
        threadId: string;
        expired?: boolean | undefined;
    } | {
        type: "INPUT_TEXT";
        threadId: string;
        placeholder?: string | undefined;
        description?: string | undefined;
        expired?: boolean | undefined;
    } | undefined;
    contentReferences?: z.objectOutputType<{}, z.ZodUnion<[z.ZodObject<{
        id: z.ZodString;
    } & {
        type: z.ZodLiteral<"KnowledgeBaseEntry">;
        knowledgeBaseEntryId: z.ZodString;
        knowledgeBaseEntryName: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        type: "KnowledgeBaseEntry";
        knowledgeBaseEntryId: string;
        knowledgeBaseEntryName: string;
    }, {
        id: string;
        type: "KnowledgeBaseEntry";
        knowledgeBaseEntryId: string;
        knowledgeBaseEntryName: string;
    }>, z.ZodObject<{
        id: z.ZodString;
    } & {
        type: z.ZodLiteral<"SecurityAlert">;
        alertId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        type: "SecurityAlert";
        alertId: string;
    }, {
        id: string;
        type: "SecurityAlert";
        alertId: string;
    }>, z.ZodObject<{
        id: z.ZodString;
    } & {
        type: z.ZodLiteral<"SecurityAlertsPage">;
    }, "strip", z.ZodTypeAny, {
        id: string;
        type: "SecurityAlertsPage";
    }, {
        id: string;
        type: "SecurityAlertsPage";
    }>, z.ZodObject<{
        id: z.ZodString;
    } & {
        type: z.ZodLiteral<"ProductDocumentation">;
        title: z.ZodString;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        title: string;
        id: string;
        type: "ProductDocumentation";
        url: string;
    }, {
        title: string;
        id: string;
        type: "ProductDocumentation";
        url: string;
    }>, z.ZodObject<{
        id: z.ZodString;
    } & {
        type: z.ZodLiteral<"EsqlQuery">;
        query: z.ZodString;
        label: z.ZodString;
        timerange: z.ZodOptional<z.ZodObject<{
            from: z.ZodString;
            to: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            from: string;
            to: string;
        }, {
            from: string;
            to: string;
        }>>;
    }, "strip", z.ZodTypeAny, {
        label: string;
        id: string;
        type: "EsqlQuery";
        query: string;
        timerange?: {
            from: string;
            to: string;
        } | undefined;
    }, {
        label: string;
        id: string;
        type: "EsqlQuery";
        query: string;
        timerange?: {
            from: string;
            to: string;
        } | undefined;
    }>, z.ZodObject<{
        id: z.ZodString;
    } & {
        type: z.ZodLiteral<"Href">;
        label: z.ZodOptional<z.ZodString>;
        href: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        type: "Href";
        href: string;
        label?: string | undefined;
    }, {
        id: string;
        type: "Href";
        href: string;
        label?: string | undefined;
    }>]>, "strip"> | undefined;
    interruptResumeValue?: {
        value: string;
        type: "SELECT_OPTION";
    } | {
        value: string;
        type: "INPUT_TEXT";
    } | undefined;
}, {
    interruptValue?: {
        type: "SELECT_OPTION";
        options: {
            value: string;
            label: string;
            buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
        }[];
        description: string;
        threadId: string;
        expired?: boolean | undefined;
    } | {
        type: "INPUT_TEXT";
        threadId: string;
        placeholder?: string | undefined;
        description?: string | undefined;
        expired?: boolean | undefined;
    } | undefined;
    contentReferences?: z.objectInputType<{}, z.ZodUnion<[z.ZodObject<{
        id: z.ZodString;
    } & {
        type: z.ZodLiteral<"KnowledgeBaseEntry">;
        knowledgeBaseEntryId: z.ZodString;
        knowledgeBaseEntryName: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        type: "KnowledgeBaseEntry";
        knowledgeBaseEntryId: string;
        knowledgeBaseEntryName: string;
    }, {
        id: string;
        type: "KnowledgeBaseEntry";
        knowledgeBaseEntryId: string;
        knowledgeBaseEntryName: string;
    }>, z.ZodObject<{
        id: z.ZodString;
    } & {
        type: z.ZodLiteral<"SecurityAlert">;
        alertId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        type: "SecurityAlert";
        alertId: string;
    }, {
        id: string;
        type: "SecurityAlert";
        alertId: string;
    }>, z.ZodObject<{
        id: z.ZodString;
    } & {
        type: z.ZodLiteral<"SecurityAlertsPage">;
    }, "strip", z.ZodTypeAny, {
        id: string;
        type: "SecurityAlertsPage";
    }, {
        id: string;
        type: "SecurityAlertsPage";
    }>, z.ZodObject<{
        id: z.ZodString;
    } & {
        type: z.ZodLiteral<"ProductDocumentation">;
        title: z.ZodString;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        title: string;
        id: string;
        type: "ProductDocumentation";
        url: string;
    }, {
        title: string;
        id: string;
        type: "ProductDocumentation";
        url: string;
    }>, z.ZodObject<{
        id: z.ZodString;
    } & {
        type: z.ZodLiteral<"EsqlQuery">;
        query: z.ZodString;
        label: z.ZodString;
        timerange: z.ZodOptional<z.ZodObject<{
            from: z.ZodString;
            to: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            from: string;
            to: string;
        }, {
            from: string;
            to: string;
        }>>;
    }, "strip", z.ZodTypeAny, {
        label: string;
        id: string;
        type: "EsqlQuery";
        query: string;
        timerange?: {
            from: string;
            to: string;
        } | undefined;
    }, {
        label: string;
        id: string;
        type: "EsqlQuery";
        query: string;
        timerange?: {
            from: string;
            to: string;
        } | undefined;
    }>, z.ZodObject<{
        id: z.ZodString;
    } & {
        type: z.ZodLiteral<"Href">;
        label: z.ZodOptional<z.ZodString>;
        href: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        type: "Href";
        href: string;
        label?: string | undefined;
    }, {
        id: string;
        type: "Href";
        href: string;
        label?: string | undefined;
    }>]>, "strip"> | undefined;
    interruptResumeValue?: {
        value: string;
        type: "SELECT_OPTION";
    } | {
        value: string;
        type: "INPUT_TEXT";
    } | undefined;
}>;
/**
 * Replacements object used to anonymize/deanonymize messages
 */
export type Replacements = z.infer<typeof Replacements>;
export declare const Replacements: z.ZodObject<{}, "strip", z.ZodString, z.objectOutputType<{}, z.ZodString, "strip">, z.objectInputType<{}, z.ZodString, "strip">>;
export type Reader = z.infer<typeof Reader>;
export declare const Reader: z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>;
/**
 * Provider
 */
export type Provider = z.infer<typeof Provider>;
export declare const Provider: z.ZodEnum<["OpenAI", "Azure OpenAI", "Other"]>;
export type ProviderEnum = typeof Provider.enum;
export declare const ProviderEnum: z.Values<["OpenAI", "Azure OpenAI", "Other"]>;
/**
 * Message role.
 */
export type MessageRole = z.infer<typeof MessageRole>;
export declare const MessageRole: z.ZodEnum<["system", "user", "assistant"]>;
export type MessageRoleEnum = typeof MessageRole.enum;
export declare const MessageRoleEnum: z.Values<["system", "user", "assistant"]>;
/**
 * The conversation category.
 */
export type ConversationCategory = z.infer<typeof ConversationCategory>;
export declare const ConversationCategory: z.ZodEnum<["assistant", "insights"]>;
export type ConversationCategoryEnum = typeof ConversationCategory.enum;
export declare const ConversationCategoryEnum: z.Values<["assistant", "insights"]>;
/**
 * AI assistant conversation message.
 */
export type Message = z.infer<typeof Message>;
export declare const Message: z.ZodObject<{
    /**
     * Message id
     */
    id: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    /**
     * Message content.
     */
    content: z.ZodString;
    /**
     * Refusal reason returned by the model when content is filtered.
     */
    refusal: z.ZodOptional<z.ZodString>;
    /**
     * Message content.
     */
    reader: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>>;
    /**
     * Message role.
     */
    role: z.ZodEnum<["system", "user", "assistant"]>;
    /**
     * The user who sent the message.
     */
    user: z.ZodOptional<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        id?: string | undefined;
        name?: string | undefined;
    }, {
        id?: string | undefined;
        name?: string | undefined;
    }>>;
    /**
     * The timestamp message was sent or received.
     */
    timestamp: z.ZodEffects<z.ZodString, string, string>;
    /**
     * Is error message.
     */
    isError: z.ZodOptional<z.ZodBoolean>;
    /**
     * Trace data
     */
    traceData: z.ZodOptional<z.ZodObject<{
        /**
         * Could be any string, not necessarily a UUID
         */
        transactionId: z.ZodOptional<z.ZodString>;
        /**
         * Could be any string, not necessarily a UUID
         */
        traceId: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        transactionId?: string | undefined;
        traceId?: string | undefined;
    }, {
        transactionId?: string | undefined;
        traceId?: string | undefined;
    }>>;
    /**
     * Metadata
     */
    metadata: z.ZodOptional<z.ZodObject<{
        /**
         * Data referred to by the message content.
         */
        contentReferences: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"KnowledgeBaseEntry">;
            knowledgeBaseEntryId: z.ZodString;
            knowledgeBaseEntryName: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
            type: "KnowledgeBaseEntry";
            knowledgeBaseEntryId: string;
            knowledgeBaseEntryName: string;
        }, {
            id: string;
            type: "KnowledgeBaseEntry";
            knowledgeBaseEntryId: string;
            knowledgeBaseEntryName: string;
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"SecurityAlert">;
            alertId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
            type: "SecurityAlert";
            alertId: string;
        }, {
            id: string;
            type: "SecurityAlert";
            alertId: string;
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"SecurityAlertsPage">;
        }, "strip", z.ZodTypeAny, {
            id: string;
            type: "SecurityAlertsPage";
        }, {
            id: string;
            type: "SecurityAlertsPage";
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"ProductDocumentation">;
            title: z.ZodString;
            url: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            title: string;
            id: string;
            type: "ProductDocumentation";
            url: string;
        }, {
            title: string;
            id: string;
            type: "ProductDocumentation";
            url: string;
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"EsqlQuery">;
            query: z.ZodString;
            label: z.ZodString;
            timerange: z.ZodOptional<z.ZodObject<{
                from: z.ZodString;
                to: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                from: string;
                to: string;
            }, {
                from: string;
                to: string;
            }>>;
        }, "strip", z.ZodTypeAny, {
            label: string;
            id: string;
            type: "EsqlQuery";
            query: string;
            timerange?: {
                from: string;
                to: string;
            } | undefined;
        }, {
            label: string;
            id: string;
            type: "EsqlQuery";
            query: string;
            timerange?: {
                from: string;
                to: string;
            } | undefined;
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"Href">;
            label: z.ZodOptional<z.ZodString>;
            href: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
            type: "Href";
            href: string;
            label?: string | undefined;
        }, {
            id: string;
            type: "Href";
            href: string;
            label?: string | undefined;
        }>]>, z.objectOutputType<{}, z.ZodUnion<[z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"KnowledgeBaseEntry">;
            knowledgeBaseEntryId: z.ZodString;
            knowledgeBaseEntryName: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
            type: "KnowledgeBaseEntry";
            knowledgeBaseEntryId: string;
            knowledgeBaseEntryName: string;
        }, {
            id: string;
            type: "KnowledgeBaseEntry";
            knowledgeBaseEntryId: string;
            knowledgeBaseEntryName: string;
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"SecurityAlert">;
            alertId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
            type: "SecurityAlert";
            alertId: string;
        }, {
            id: string;
            type: "SecurityAlert";
            alertId: string;
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"SecurityAlertsPage">;
        }, "strip", z.ZodTypeAny, {
            id: string;
            type: "SecurityAlertsPage";
        }, {
            id: string;
            type: "SecurityAlertsPage";
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"ProductDocumentation">;
            title: z.ZodString;
            url: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            title: string;
            id: string;
            type: "ProductDocumentation";
            url: string;
        }, {
            title: string;
            id: string;
            type: "ProductDocumentation";
            url: string;
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"EsqlQuery">;
            query: z.ZodString;
            label: z.ZodString;
            timerange: z.ZodOptional<z.ZodObject<{
                from: z.ZodString;
                to: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                from: string;
                to: string;
            }, {
                from: string;
                to: string;
            }>>;
        }, "strip", z.ZodTypeAny, {
            label: string;
            id: string;
            type: "EsqlQuery";
            query: string;
            timerange?: {
                from: string;
                to: string;
            } | undefined;
        }, {
            label: string;
            id: string;
            type: "EsqlQuery";
            query: string;
            timerange?: {
                from: string;
                to: string;
            } | undefined;
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"Href">;
            label: z.ZodOptional<z.ZodString>;
            href: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
            type: "Href";
            href: string;
            label?: string | undefined;
        }, {
            id: string;
            type: "Href";
            href: string;
            label?: string | undefined;
        }>]>, "strip">, z.objectInputType<{}, z.ZodUnion<[z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"KnowledgeBaseEntry">;
            knowledgeBaseEntryId: z.ZodString;
            knowledgeBaseEntryName: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
            type: "KnowledgeBaseEntry";
            knowledgeBaseEntryId: string;
            knowledgeBaseEntryName: string;
        }, {
            id: string;
            type: "KnowledgeBaseEntry";
            knowledgeBaseEntryId: string;
            knowledgeBaseEntryName: string;
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"SecurityAlert">;
            alertId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
            type: "SecurityAlert";
            alertId: string;
        }, {
            id: string;
            type: "SecurityAlert";
            alertId: string;
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"SecurityAlertsPage">;
        }, "strip", z.ZodTypeAny, {
            id: string;
            type: "SecurityAlertsPage";
        }, {
            id: string;
            type: "SecurityAlertsPage";
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"ProductDocumentation">;
            title: z.ZodString;
            url: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            title: string;
            id: string;
            type: "ProductDocumentation";
            url: string;
        }, {
            title: string;
            id: string;
            type: "ProductDocumentation";
            url: string;
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"EsqlQuery">;
            query: z.ZodString;
            label: z.ZodString;
            timerange: z.ZodOptional<z.ZodObject<{
                from: z.ZodString;
                to: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                from: string;
                to: string;
            }, {
                from: string;
                to: string;
            }>>;
        }, "strip", z.ZodTypeAny, {
            label: string;
            id: string;
            type: "EsqlQuery";
            query: string;
            timerange?: {
                from: string;
                to: string;
            } | undefined;
        }, {
            label: string;
            id: string;
            type: "EsqlQuery";
            query: string;
            timerange?: {
                from: string;
                to: string;
            } | undefined;
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"Href">;
            label: z.ZodOptional<z.ZodString>;
            href: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
            type: "Href";
            href: string;
            label?: string | undefined;
        }, {
            id: string;
            type: "Href";
            href: string;
            label?: string | undefined;
        }>]>, "strip">>>;
        /**
         * When the agent is interrupted (for example, when user input is required), this field is populated with the details of the interrupt. Messages containing interruptValues in the metadata are excluded from the LLM context.
         */
        interruptValue: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
            expired: z.ZodOptional<z.ZodBoolean>;
            threadId: z.ZodString;
        } & {
            type: z.ZodLiteral<"SELECT_OPTION">;
            description: z.ZodString;
            options: z.ZodArray<z.ZodObject<{
                label: z.ZodString;
                value: z.ZodString;
                buttonColor: z.ZodOptional<z.ZodEnum<["text", "accent", "accentSecondary", "primary", "success", "warning", "danger", "neutral", "risk"]>>;
            }, "strip", z.ZodTypeAny, {
                value: string;
                label: string;
                buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
            }, {
                value: string;
                label: string;
                buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            type: "SELECT_OPTION";
            options: {
                value: string;
                label: string;
                buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
            }[];
            description: string;
            threadId: string;
            expired?: boolean | undefined;
        }, {
            type: "SELECT_OPTION";
            options: {
                value: string;
                label: string;
                buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
            }[];
            description: string;
            threadId: string;
            expired?: boolean | undefined;
        }>, z.ZodObject<{
            expired: z.ZodOptional<z.ZodBoolean>;
            threadId: z.ZodString;
        } & {
            type: z.ZodLiteral<"INPUT_TEXT">;
            description: z.ZodOptional<z.ZodString>;
            placeholder: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "INPUT_TEXT";
            threadId: string;
            placeholder?: string | undefined;
            description?: string | undefined;
            expired?: boolean | undefined;
        }, {
            type: "INPUT_TEXT";
            threadId: string;
            placeholder?: string | undefined;
            description?: string | undefined;
            expired?: boolean | undefined;
        }>]>>;
        /**
         * When the agent is resumed after an interrupt, this field is populated with the details of the resume value.
         */
        interruptResumeValue: z.ZodOptional<z.ZodUnion<[z.ZodObject<{} & {
            type: z.ZodLiteral<"SELECT_OPTION">;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            type: "SELECT_OPTION";
        }, {
            value: string;
            type: "SELECT_OPTION";
        }>, z.ZodObject<{} & {
            type: z.ZodLiteral<"INPUT_TEXT">;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            type: "INPUT_TEXT";
        }, {
            value: string;
            type: "INPUT_TEXT";
        }>]>>;
    }, "strip", z.ZodTypeAny, {
        interruptValue?: {
            type: "SELECT_OPTION";
            options: {
                value: string;
                label: string;
                buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
            }[];
            description: string;
            threadId: string;
            expired?: boolean | undefined;
        } | {
            type: "INPUT_TEXT";
            threadId: string;
            placeholder?: string | undefined;
            description?: string | undefined;
            expired?: boolean | undefined;
        } | undefined;
        contentReferences?: z.objectOutputType<{}, z.ZodUnion<[z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"KnowledgeBaseEntry">;
            knowledgeBaseEntryId: z.ZodString;
            knowledgeBaseEntryName: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
            type: "KnowledgeBaseEntry";
            knowledgeBaseEntryId: string;
            knowledgeBaseEntryName: string;
        }, {
            id: string;
            type: "KnowledgeBaseEntry";
            knowledgeBaseEntryId: string;
            knowledgeBaseEntryName: string;
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"SecurityAlert">;
            alertId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
            type: "SecurityAlert";
            alertId: string;
        }, {
            id: string;
            type: "SecurityAlert";
            alertId: string;
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"SecurityAlertsPage">;
        }, "strip", z.ZodTypeAny, {
            id: string;
            type: "SecurityAlertsPage";
        }, {
            id: string;
            type: "SecurityAlertsPage";
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"ProductDocumentation">;
            title: z.ZodString;
            url: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            title: string;
            id: string;
            type: "ProductDocumentation";
            url: string;
        }, {
            title: string;
            id: string;
            type: "ProductDocumentation";
            url: string;
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"EsqlQuery">;
            query: z.ZodString;
            label: z.ZodString;
            timerange: z.ZodOptional<z.ZodObject<{
                from: z.ZodString;
                to: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                from: string;
                to: string;
            }, {
                from: string;
                to: string;
            }>>;
        }, "strip", z.ZodTypeAny, {
            label: string;
            id: string;
            type: "EsqlQuery";
            query: string;
            timerange?: {
                from: string;
                to: string;
            } | undefined;
        }, {
            label: string;
            id: string;
            type: "EsqlQuery";
            query: string;
            timerange?: {
                from: string;
                to: string;
            } | undefined;
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"Href">;
            label: z.ZodOptional<z.ZodString>;
            href: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
            type: "Href";
            href: string;
            label?: string | undefined;
        }, {
            id: string;
            type: "Href";
            href: string;
            label?: string | undefined;
        }>]>, "strip"> | undefined;
        interruptResumeValue?: {
            value: string;
            type: "SELECT_OPTION";
        } | {
            value: string;
            type: "INPUT_TEXT";
        } | undefined;
    }, {
        interruptValue?: {
            type: "SELECT_OPTION";
            options: {
                value: string;
                label: string;
                buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
            }[];
            description: string;
            threadId: string;
            expired?: boolean | undefined;
        } | {
            type: "INPUT_TEXT";
            threadId: string;
            placeholder?: string | undefined;
            description?: string | undefined;
            expired?: boolean | undefined;
        } | undefined;
        contentReferences?: z.objectInputType<{}, z.ZodUnion<[z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"KnowledgeBaseEntry">;
            knowledgeBaseEntryId: z.ZodString;
            knowledgeBaseEntryName: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
            type: "KnowledgeBaseEntry";
            knowledgeBaseEntryId: string;
            knowledgeBaseEntryName: string;
        }, {
            id: string;
            type: "KnowledgeBaseEntry";
            knowledgeBaseEntryId: string;
            knowledgeBaseEntryName: string;
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"SecurityAlert">;
            alertId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
            type: "SecurityAlert";
            alertId: string;
        }, {
            id: string;
            type: "SecurityAlert";
            alertId: string;
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"SecurityAlertsPage">;
        }, "strip", z.ZodTypeAny, {
            id: string;
            type: "SecurityAlertsPage";
        }, {
            id: string;
            type: "SecurityAlertsPage";
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"ProductDocumentation">;
            title: z.ZodString;
            url: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            title: string;
            id: string;
            type: "ProductDocumentation";
            url: string;
        }, {
            title: string;
            id: string;
            type: "ProductDocumentation";
            url: string;
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"EsqlQuery">;
            query: z.ZodString;
            label: z.ZodString;
            timerange: z.ZodOptional<z.ZodObject<{
                from: z.ZodString;
                to: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                from: string;
                to: string;
            }, {
                from: string;
                to: string;
            }>>;
        }, "strip", z.ZodTypeAny, {
            label: string;
            id: string;
            type: "EsqlQuery";
            query: string;
            timerange?: {
                from: string;
                to: string;
            } | undefined;
        }, {
            label: string;
            id: string;
            type: "EsqlQuery";
            query: string;
            timerange?: {
                from: string;
                to: string;
            } | undefined;
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"Href">;
            label: z.ZodOptional<z.ZodString>;
            href: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
            type: "Href";
            href: string;
            label?: string | undefined;
        }, {
            id: string;
            type: "Href";
            href: string;
            label?: string | undefined;
        }>]>, "strip"> | undefined;
        interruptResumeValue?: {
            value: string;
            type: "SELECT_OPTION";
        } | {
            value: string;
            type: "INPUT_TEXT";
        } | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    role: "user" | "system" | "assistant";
    content: string;
    timestamp: string;
    metadata?: {
        interruptValue?: {
            type: "SELECT_OPTION";
            options: {
                value: string;
                label: string;
                buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
            }[];
            description: string;
            threadId: string;
            expired?: boolean | undefined;
        } | {
            type: "INPUT_TEXT";
            threadId: string;
            placeholder?: string | undefined;
            description?: string | undefined;
            expired?: boolean | undefined;
        } | undefined;
        contentReferences?: z.objectOutputType<{}, z.ZodUnion<[z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"KnowledgeBaseEntry">;
            knowledgeBaseEntryId: z.ZodString;
            knowledgeBaseEntryName: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
            type: "KnowledgeBaseEntry";
            knowledgeBaseEntryId: string;
            knowledgeBaseEntryName: string;
        }, {
            id: string;
            type: "KnowledgeBaseEntry";
            knowledgeBaseEntryId: string;
            knowledgeBaseEntryName: string;
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"SecurityAlert">;
            alertId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
            type: "SecurityAlert";
            alertId: string;
        }, {
            id: string;
            type: "SecurityAlert";
            alertId: string;
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"SecurityAlertsPage">;
        }, "strip", z.ZodTypeAny, {
            id: string;
            type: "SecurityAlertsPage";
        }, {
            id: string;
            type: "SecurityAlertsPage";
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"ProductDocumentation">;
            title: z.ZodString;
            url: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            title: string;
            id: string;
            type: "ProductDocumentation";
            url: string;
        }, {
            title: string;
            id: string;
            type: "ProductDocumentation";
            url: string;
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"EsqlQuery">;
            query: z.ZodString;
            label: z.ZodString;
            timerange: z.ZodOptional<z.ZodObject<{
                from: z.ZodString;
                to: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                from: string;
                to: string;
            }, {
                from: string;
                to: string;
            }>>;
        }, "strip", z.ZodTypeAny, {
            label: string;
            id: string;
            type: "EsqlQuery";
            query: string;
            timerange?: {
                from: string;
                to: string;
            } | undefined;
        }, {
            label: string;
            id: string;
            type: "EsqlQuery";
            query: string;
            timerange?: {
                from: string;
                to: string;
            } | undefined;
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"Href">;
            label: z.ZodOptional<z.ZodString>;
            href: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
            type: "Href";
            href: string;
            label?: string | undefined;
        }, {
            id: string;
            type: "Href";
            href: string;
            label?: string | undefined;
        }>]>, "strip"> | undefined;
        interruptResumeValue?: {
            value: string;
            type: "SELECT_OPTION";
        } | {
            value: string;
            type: "INPUT_TEXT";
        } | undefined;
    } | undefined;
    id?: string | undefined;
    user?: {
        id?: string | undefined;
        name?: string | undefined;
    } | undefined;
    refusal?: string | undefined;
    reader?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
    isError?: boolean | undefined;
    traceData?: {
        transactionId?: string | undefined;
        traceId?: string | undefined;
    } | undefined;
}, {
    role: "user" | "system" | "assistant";
    content: string;
    timestamp: string;
    metadata?: {
        interruptValue?: {
            type: "SELECT_OPTION";
            options: {
                value: string;
                label: string;
                buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
            }[];
            description: string;
            threadId: string;
            expired?: boolean | undefined;
        } | {
            type: "INPUT_TEXT";
            threadId: string;
            placeholder?: string | undefined;
            description?: string | undefined;
            expired?: boolean | undefined;
        } | undefined;
        contentReferences?: z.objectInputType<{}, z.ZodUnion<[z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"KnowledgeBaseEntry">;
            knowledgeBaseEntryId: z.ZodString;
            knowledgeBaseEntryName: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
            type: "KnowledgeBaseEntry";
            knowledgeBaseEntryId: string;
            knowledgeBaseEntryName: string;
        }, {
            id: string;
            type: "KnowledgeBaseEntry";
            knowledgeBaseEntryId: string;
            knowledgeBaseEntryName: string;
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"SecurityAlert">;
            alertId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
            type: "SecurityAlert";
            alertId: string;
        }, {
            id: string;
            type: "SecurityAlert";
            alertId: string;
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"SecurityAlertsPage">;
        }, "strip", z.ZodTypeAny, {
            id: string;
            type: "SecurityAlertsPage";
        }, {
            id: string;
            type: "SecurityAlertsPage";
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"ProductDocumentation">;
            title: z.ZodString;
            url: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            title: string;
            id: string;
            type: "ProductDocumentation";
            url: string;
        }, {
            title: string;
            id: string;
            type: "ProductDocumentation";
            url: string;
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"EsqlQuery">;
            query: z.ZodString;
            label: z.ZodString;
            timerange: z.ZodOptional<z.ZodObject<{
                from: z.ZodString;
                to: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                from: string;
                to: string;
            }, {
                from: string;
                to: string;
            }>>;
        }, "strip", z.ZodTypeAny, {
            label: string;
            id: string;
            type: "EsqlQuery";
            query: string;
            timerange?: {
                from: string;
                to: string;
            } | undefined;
        }, {
            label: string;
            id: string;
            type: "EsqlQuery";
            query: string;
            timerange?: {
                from: string;
                to: string;
            } | undefined;
        }>, z.ZodObject<{
            id: z.ZodString;
        } & {
            type: z.ZodLiteral<"Href">;
            label: z.ZodOptional<z.ZodString>;
            href: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
            type: "Href";
            href: string;
            label?: string | undefined;
        }, {
            id: string;
            type: "Href";
            href: string;
            label?: string | undefined;
        }>]>, "strip"> | undefined;
        interruptResumeValue?: {
            value: string;
            type: "SELECT_OPTION";
        } | {
            value: string;
            type: "INPUT_TEXT";
        } | undefined;
    } | undefined;
    id?: string | undefined;
    user?: {
        id?: string | undefined;
        name?: string | undefined;
    } | undefined;
    refusal?: string | undefined;
    reader?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
    isError?: boolean | undefined;
    traceData?: {
        transactionId?: string | undefined;
        traceId?: string | undefined;
    } | undefined;
}>;
export type ApiConfig = z.infer<typeof ApiConfig>;
export declare const ApiConfig: z.ZodObject<{
    /**
     * Connector ID
     */
    connectorId: z.ZodString;
    /**
     * Action type ID
     */
    actionTypeId: z.ZodString;
    /**
     * Default system prompt ID
     */
    defaultSystemPromptId: z.ZodOptional<z.ZodString>;
    /**
     * Provider
     */
    provider: z.ZodOptional<z.ZodEnum<["OpenAI", "Azure OpenAI", "Other"]>>;
    /**
     * Model
     */
    model: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    connectorId: string;
    actionTypeId: string;
    model?: string | undefined;
    defaultSystemPromptId?: string | undefined;
    provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
}, {
    connectorId: string;
    actionTypeId: string;
    model?: string | undefined;
    defaultSystemPromptId?: string | undefined;
    provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
}>;
export type ErrorSchema = z.infer<typeof ErrorSchema>;
export declare const ErrorSchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    error: z.ZodObject<{
        status_code: z.ZodNumber;
        message: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        message: string;
        status_code: number;
    }, {
        message: string;
        status_code: number;
    }>;
}, "strict", z.ZodTypeAny, {
    error: {
        message: string;
        status_code: number;
    };
    id?: string | undefined;
}, {
    error: {
        message: string;
        status_code: number;
    };
    id?: string | undefined;
}>;
export type ConversationResponse = z.infer<typeof ConversationResponse>;
export declare const ConversationResponse: z.ZodObject<{
    id: z.ZodEffects<z.ZodString, string, string>;
    /**
     * The conversation title.
     */
    title: z.ZodString;
    /**
     * The conversation category.
     */
    category: z.ZodEnum<["assistant", "insights"]>;
    timestamp: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    /**
     * The last time conversation was updated.
     */
    updatedAt: z.ZodOptional<z.ZodString>;
    /**
     * The time conversation was created.
     */
    createdAt: z.ZodString;
    replacements: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodString, z.objectOutputType<{}, z.ZodString, "strip">, z.objectInputType<{}, z.ZodString, "strip">>>;
    /**
     * The user who created the conversation.
     */
    createdBy: z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        id?: string | undefined;
        name?: string | undefined;
    }, {
        id?: string | undefined;
        name?: string | undefined;
    }>;
    users: z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        id?: string | undefined;
        name?: string | undefined;
    }, {
        id?: string | undefined;
        name?: string | undefined;
    }>, "many">;
    /**
     * The conversation messages.
     */
    messages: z.ZodOptional<z.ZodArray<z.ZodObject<{
        /**
         * Message id
         */
        id: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
        /**
         * Message content.
         */
        content: z.ZodString;
        /**
         * Refusal reason returned by the model when content is filtered.
         */
        refusal: z.ZodOptional<z.ZodString>;
        /**
         * Message content.
         */
        reader: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>>;
        /**
         * Message role.
         */
        role: z.ZodEnum<["system", "user", "assistant"]>;
        /**
         * The user who sent the message.
         */
        user: z.ZodOptional<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            id?: string | undefined;
            name?: string | undefined;
        }, {
            id?: string | undefined;
            name?: string | undefined;
        }>>;
        /**
         * The timestamp message was sent or received.
         */
        timestamp: z.ZodEffects<z.ZodString, string, string>;
        /**
         * Is error message.
         */
        isError: z.ZodOptional<z.ZodBoolean>;
        /**
         * Trace data
         */
        traceData: z.ZodOptional<z.ZodObject<{
            /**
             * Could be any string, not necessarily a UUID
             */
            transactionId: z.ZodOptional<z.ZodString>;
            /**
             * Could be any string, not necessarily a UUID
             */
            traceId: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            transactionId?: string | undefined;
            traceId?: string | undefined;
        }, {
            transactionId?: string | undefined;
            traceId?: string | undefined;
        }>>;
        /**
         * Metadata
         */
        metadata: z.ZodOptional<z.ZodObject<{
            /**
             * Data referred to by the message content.
             */
            contentReferences: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"KnowledgeBaseEntry">;
                knowledgeBaseEntryId: z.ZodString;
                knowledgeBaseEntryName: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "KnowledgeBaseEntry";
                knowledgeBaseEntryId: string;
                knowledgeBaseEntryName: string;
            }, {
                id: string;
                type: "KnowledgeBaseEntry";
                knowledgeBaseEntryId: string;
                knowledgeBaseEntryName: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"SecurityAlert">;
                alertId: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "SecurityAlert";
                alertId: string;
            }, {
                id: string;
                type: "SecurityAlert";
                alertId: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"SecurityAlertsPage">;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "SecurityAlertsPage";
            }, {
                id: string;
                type: "SecurityAlertsPage";
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"ProductDocumentation">;
                title: z.ZodString;
                url: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                title: string;
                id: string;
                type: "ProductDocumentation";
                url: string;
            }, {
                title: string;
                id: string;
                type: "ProductDocumentation";
                url: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"EsqlQuery">;
                query: z.ZodString;
                label: z.ZodString;
                timerange: z.ZodOptional<z.ZodObject<{
                    from: z.ZodString;
                    to: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    from: string;
                    to: string;
                }, {
                    from: string;
                    to: string;
                }>>;
            }, "strip", z.ZodTypeAny, {
                label: string;
                id: string;
                type: "EsqlQuery";
                query: string;
                timerange?: {
                    from: string;
                    to: string;
                } | undefined;
            }, {
                label: string;
                id: string;
                type: "EsqlQuery";
                query: string;
                timerange?: {
                    from: string;
                    to: string;
                } | undefined;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"Href">;
                label: z.ZodOptional<z.ZodString>;
                href: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "Href";
                href: string;
                label?: string | undefined;
            }, {
                id: string;
                type: "Href";
                href: string;
                label?: string | undefined;
            }>]>, z.objectOutputType<{}, z.ZodUnion<[z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"KnowledgeBaseEntry">;
                knowledgeBaseEntryId: z.ZodString;
                knowledgeBaseEntryName: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "KnowledgeBaseEntry";
                knowledgeBaseEntryId: string;
                knowledgeBaseEntryName: string;
            }, {
                id: string;
                type: "KnowledgeBaseEntry";
                knowledgeBaseEntryId: string;
                knowledgeBaseEntryName: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"SecurityAlert">;
                alertId: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "SecurityAlert";
                alertId: string;
            }, {
                id: string;
                type: "SecurityAlert";
                alertId: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"SecurityAlertsPage">;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "SecurityAlertsPage";
            }, {
                id: string;
                type: "SecurityAlertsPage";
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"ProductDocumentation">;
                title: z.ZodString;
                url: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                title: string;
                id: string;
                type: "ProductDocumentation";
                url: string;
            }, {
                title: string;
                id: string;
                type: "ProductDocumentation";
                url: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"EsqlQuery">;
                query: z.ZodString;
                label: z.ZodString;
                timerange: z.ZodOptional<z.ZodObject<{
                    from: z.ZodString;
                    to: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    from: string;
                    to: string;
                }, {
                    from: string;
                    to: string;
                }>>;
            }, "strip", z.ZodTypeAny, {
                label: string;
                id: string;
                type: "EsqlQuery";
                query: string;
                timerange?: {
                    from: string;
                    to: string;
                } | undefined;
            }, {
                label: string;
                id: string;
                type: "EsqlQuery";
                query: string;
                timerange?: {
                    from: string;
                    to: string;
                } | undefined;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"Href">;
                label: z.ZodOptional<z.ZodString>;
                href: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "Href";
                href: string;
                label?: string | undefined;
            }, {
                id: string;
                type: "Href";
                href: string;
                label?: string | undefined;
            }>]>, "strip">, z.objectInputType<{}, z.ZodUnion<[z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"KnowledgeBaseEntry">;
                knowledgeBaseEntryId: z.ZodString;
                knowledgeBaseEntryName: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "KnowledgeBaseEntry";
                knowledgeBaseEntryId: string;
                knowledgeBaseEntryName: string;
            }, {
                id: string;
                type: "KnowledgeBaseEntry";
                knowledgeBaseEntryId: string;
                knowledgeBaseEntryName: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"SecurityAlert">;
                alertId: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "SecurityAlert";
                alertId: string;
            }, {
                id: string;
                type: "SecurityAlert";
                alertId: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"SecurityAlertsPage">;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "SecurityAlertsPage";
            }, {
                id: string;
                type: "SecurityAlertsPage";
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"ProductDocumentation">;
                title: z.ZodString;
                url: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                title: string;
                id: string;
                type: "ProductDocumentation";
                url: string;
            }, {
                title: string;
                id: string;
                type: "ProductDocumentation";
                url: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"EsqlQuery">;
                query: z.ZodString;
                label: z.ZodString;
                timerange: z.ZodOptional<z.ZodObject<{
                    from: z.ZodString;
                    to: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    from: string;
                    to: string;
                }, {
                    from: string;
                    to: string;
                }>>;
            }, "strip", z.ZodTypeAny, {
                label: string;
                id: string;
                type: "EsqlQuery";
                query: string;
                timerange?: {
                    from: string;
                    to: string;
                } | undefined;
            }, {
                label: string;
                id: string;
                type: "EsqlQuery";
                query: string;
                timerange?: {
                    from: string;
                    to: string;
                } | undefined;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"Href">;
                label: z.ZodOptional<z.ZodString>;
                href: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "Href";
                href: string;
                label?: string | undefined;
            }, {
                id: string;
                type: "Href";
                href: string;
                label?: string | undefined;
            }>]>, "strip">>>;
            /**
             * When the agent is interrupted (for example, when user input is required), this field is populated with the details of the interrupt. Messages containing interruptValues in the metadata are excluded from the LLM context.
             */
            interruptValue: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
                expired: z.ZodOptional<z.ZodBoolean>;
                threadId: z.ZodString;
            } & {
                type: z.ZodLiteral<"SELECT_OPTION">;
                description: z.ZodString;
                options: z.ZodArray<z.ZodObject<{
                    label: z.ZodString;
                    value: z.ZodString;
                    buttonColor: z.ZodOptional<z.ZodEnum<["text", "accent", "accentSecondary", "primary", "success", "warning", "danger", "neutral", "risk"]>>;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    label: string;
                    buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                }, {
                    value: string;
                    label: string;
                    buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                }>, "many">;
            }, "strip", z.ZodTypeAny, {
                type: "SELECT_OPTION";
                options: {
                    value: string;
                    label: string;
                    buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                }[];
                description: string;
                threadId: string;
                expired?: boolean | undefined;
            }, {
                type: "SELECT_OPTION";
                options: {
                    value: string;
                    label: string;
                    buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                }[];
                description: string;
                threadId: string;
                expired?: boolean | undefined;
            }>, z.ZodObject<{
                expired: z.ZodOptional<z.ZodBoolean>;
                threadId: z.ZodString;
            } & {
                type: z.ZodLiteral<"INPUT_TEXT">;
                description: z.ZodOptional<z.ZodString>;
                placeholder: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                type: "INPUT_TEXT";
                threadId: string;
                placeholder?: string | undefined;
                description?: string | undefined;
                expired?: boolean | undefined;
            }, {
                type: "INPUT_TEXT";
                threadId: string;
                placeholder?: string | undefined;
                description?: string | undefined;
                expired?: boolean | undefined;
            }>]>>;
            /**
             * When the agent is resumed after an interrupt, this field is populated with the details of the resume value.
             */
            interruptResumeValue: z.ZodOptional<z.ZodUnion<[z.ZodObject<{} & {
                type: z.ZodLiteral<"SELECT_OPTION">;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                type: "SELECT_OPTION";
            }, {
                value: string;
                type: "SELECT_OPTION";
            }>, z.ZodObject<{} & {
                type: z.ZodLiteral<"INPUT_TEXT">;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                type: "INPUT_TEXT";
            }, {
                value: string;
                type: "INPUT_TEXT";
            }>]>>;
        }, "strip", z.ZodTypeAny, {
            interruptValue?: {
                type: "SELECT_OPTION";
                options: {
                    value: string;
                    label: string;
                    buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                }[];
                description: string;
                threadId: string;
                expired?: boolean | undefined;
            } | {
                type: "INPUT_TEXT";
                threadId: string;
                placeholder?: string | undefined;
                description?: string | undefined;
                expired?: boolean | undefined;
            } | undefined;
            contentReferences?: z.objectOutputType<{}, z.ZodUnion<[z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"KnowledgeBaseEntry">;
                knowledgeBaseEntryId: z.ZodString;
                knowledgeBaseEntryName: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "KnowledgeBaseEntry";
                knowledgeBaseEntryId: string;
                knowledgeBaseEntryName: string;
            }, {
                id: string;
                type: "KnowledgeBaseEntry";
                knowledgeBaseEntryId: string;
                knowledgeBaseEntryName: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"SecurityAlert">;
                alertId: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "SecurityAlert";
                alertId: string;
            }, {
                id: string;
                type: "SecurityAlert";
                alertId: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"SecurityAlertsPage">;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "SecurityAlertsPage";
            }, {
                id: string;
                type: "SecurityAlertsPage";
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"ProductDocumentation">;
                title: z.ZodString;
                url: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                title: string;
                id: string;
                type: "ProductDocumentation";
                url: string;
            }, {
                title: string;
                id: string;
                type: "ProductDocumentation";
                url: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"EsqlQuery">;
                query: z.ZodString;
                label: z.ZodString;
                timerange: z.ZodOptional<z.ZodObject<{
                    from: z.ZodString;
                    to: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    from: string;
                    to: string;
                }, {
                    from: string;
                    to: string;
                }>>;
            }, "strip", z.ZodTypeAny, {
                label: string;
                id: string;
                type: "EsqlQuery";
                query: string;
                timerange?: {
                    from: string;
                    to: string;
                } | undefined;
            }, {
                label: string;
                id: string;
                type: "EsqlQuery";
                query: string;
                timerange?: {
                    from: string;
                    to: string;
                } | undefined;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"Href">;
                label: z.ZodOptional<z.ZodString>;
                href: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "Href";
                href: string;
                label?: string | undefined;
            }, {
                id: string;
                type: "Href";
                href: string;
                label?: string | undefined;
            }>]>, "strip"> | undefined;
            interruptResumeValue?: {
                value: string;
                type: "SELECT_OPTION";
            } | {
                value: string;
                type: "INPUT_TEXT";
            } | undefined;
        }, {
            interruptValue?: {
                type: "SELECT_OPTION";
                options: {
                    value: string;
                    label: string;
                    buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                }[];
                description: string;
                threadId: string;
                expired?: boolean | undefined;
            } | {
                type: "INPUT_TEXT";
                threadId: string;
                placeholder?: string | undefined;
                description?: string | undefined;
                expired?: boolean | undefined;
            } | undefined;
            contentReferences?: z.objectInputType<{}, z.ZodUnion<[z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"KnowledgeBaseEntry">;
                knowledgeBaseEntryId: z.ZodString;
                knowledgeBaseEntryName: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "KnowledgeBaseEntry";
                knowledgeBaseEntryId: string;
                knowledgeBaseEntryName: string;
            }, {
                id: string;
                type: "KnowledgeBaseEntry";
                knowledgeBaseEntryId: string;
                knowledgeBaseEntryName: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"SecurityAlert">;
                alertId: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "SecurityAlert";
                alertId: string;
            }, {
                id: string;
                type: "SecurityAlert";
                alertId: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"SecurityAlertsPage">;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "SecurityAlertsPage";
            }, {
                id: string;
                type: "SecurityAlertsPage";
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"ProductDocumentation">;
                title: z.ZodString;
                url: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                title: string;
                id: string;
                type: "ProductDocumentation";
                url: string;
            }, {
                title: string;
                id: string;
                type: "ProductDocumentation";
                url: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"EsqlQuery">;
                query: z.ZodString;
                label: z.ZodString;
                timerange: z.ZodOptional<z.ZodObject<{
                    from: z.ZodString;
                    to: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    from: string;
                    to: string;
                }, {
                    from: string;
                    to: string;
                }>>;
            }, "strip", z.ZodTypeAny, {
                label: string;
                id: string;
                type: "EsqlQuery";
                query: string;
                timerange?: {
                    from: string;
                    to: string;
                } | undefined;
            }, {
                label: string;
                id: string;
                type: "EsqlQuery";
                query: string;
                timerange?: {
                    from: string;
                    to: string;
                } | undefined;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"Href">;
                label: z.ZodOptional<z.ZodString>;
                href: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "Href";
                href: string;
                label?: string | undefined;
            }, {
                id: string;
                type: "Href";
                href: string;
                label?: string | undefined;
            }>]>, "strip"> | undefined;
            interruptResumeValue?: {
                value: string;
                type: "SELECT_OPTION";
            } | {
                value: string;
                type: "INPUT_TEXT";
            } | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        role: "user" | "system" | "assistant";
        content: string;
        timestamp: string;
        metadata?: {
            interruptValue?: {
                type: "SELECT_OPTION";
                options: {
                    value: string;
                    label: string;
                    buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                }[];
                description: string;
                threadId: string;
                expired?: boolean | undefined;
            } | {
                type: "INPUT_TEXT";
                threadId: string;
                placeholder?: string | undefined;
                description?: string | undefined;
                expired?: boolean | undefined;
            } | undefined;
            contentReferences?: z.objectOutputType<{}, z.ZodUnion<[z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"KnowledgeBaseEntry">;
                knowledgeBaseEntryId: z.ZodString;
                knowledgeBaseEntryName: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "KnowledgeBaseEntry";
                knowledgeBaseEntryId: string;
                knowledgeBaseEntryName: string;
            }, {
                id: string;
                type: "KnowledgeBaseEntry";
                knowledgeBaseEntryId: string;
                knowledgeBaseEntryName: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"SecurityAlert">;
                alertId: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "SecurityAlert";
                alertId: string;
            }, {
                id: string;
                type: "SecurityAlert";
                alertId: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"SecurityAlertsPage">;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "SecurityAlertsPage";
            }, {
                id: string;
                type: "SecurityAlertsPage";
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"ProductDocumentation">;
                title: z.ZodString;
                url: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                title: string;
                id: string;
                type: "ProductDocumentation";
                url: string;
            }, {
                title: string;
                id: string;
                type: "ProductDocumentation";
                url: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"EsqlQuery">;
                query: z.ZodString;
                label: z.ZodString;
                timerange: z.ZodOptional<z.ZodObject<{
                    from: z.ZodString;
                    to: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    from: string;
                    to: string;
                }, {
                    from: string;
                    to: string;
                }>>;
            }, "strip", z.ZodTypeAny, {
                label: string;
                id: string;
                type: "EsqlQuery";
                query: string;
                timerange?: {
                    from: string;
                    to: string;
                } | undefined;
            }, {
                label: string;
                id: string;
                type: "EsqlQuery";
                query: string;
                timerange?: {
                    from: string;
                    to: string;
                } | undefined;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"Href">;
                label: z.ZodOptional<z.ZodString>;
                href: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "Href";
                href: string;
                label?: string | undefined;
            }, {
                id: string;
                type: "Href";
                href: string;
                label?: string | undefined;
            }>]>, "strip"> | undefined;
            interruptResumeValue?: {
                value: string;
                type: "SELECT_OPTION";
            } | {
                value: string;
                type: "INPUT_TEXT";
            } | undefined;
        } | undefined;
        id?: string | undefined;
        user?: {
            id?: string | undefined;
            name?: string | undefined;
        } | undefined;
        refusal?: string | undefined;
        reader?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
        isError?: boolean | undefined;
        traceData?: {
            transactionId?: string | undefined;
            traceId?: string | undefined;
        } | undefined;
    }, {
        role: "user" | "system" | "assistant";
        content: string;
        timestamp: string;
        metadata?: {
            interruptValue?: {
                type: "SELECT_OPTION";
                options: {
                    value: string;
                    label: string;
                    buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                }[];
                description: string;
                threadId: string;
                expired?: boolean | undefined;
            } | {
                type: "INPUT_TEXT";
                threadId: string;
                placeholder?: string | undefined;
                description?: string | undefined;
                expired?: boolean | undefined;
            } | undefined;
            contentReferences?: z.objectInputType<{}, z.ZodUnion<[z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"KnowledgeBaseEntry">;
                knowledgeBaseEntryId: z.ZodString;
                knowledgeBaseEntryName: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "KnowledgeBaseEntry";
                knowledgeBaseEntryId: string;
                knowledgeBaseEntryName: string;
            }, {
                id: string;
                type: "KnowledgeBaseEntry";
                knowledgeBaseEntryId: string;
                knowledgeBaseEntryName: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"SecurityAlert">;
                alertId: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "SecurityAlert";
                alertId: string;
            }, {
                id: string;
                type: "SecurityAlert";
                alertId: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"SecurityAlertsPage">;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "SecurityAlertsPage";
            }, {
                id: string;
                type: "SecurityAlertsPage";
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"ProductDocumentation">;
                title: z.ZodString;
                url: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                title: string;
                id: string;
                type: "ProductDocumentation";
                url: string;
            }, {
                title: string;
                id: string;
                type: "ProductDocumentation";
                url: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"EsqlQuery">;
                query: z.ZodString;
                label: z.ZodString;
                timerange: z.ZodOptional<z.ZodObject<{
                    from: z.ZodString;
                    to: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    from: string;
                    to: string;
                }, {
                    from: string;
                    to: string;
                }>>;
            }, "strip", z.ZodTypeAny, {
                label: string;
                id: string;
                type: "EsqlQuery";
                query: string;
                timerange?: {
                    from: string;
                    to: string;
                } | undefined;
            }, {
                label: string;
                id: string;
                type: "EsqlQuery";
                query: string;
                timerange?: {
                    from: string;
                    to: string;
                } | undefined;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"Href">;
                label: z.ZodOptional<z.ZodString>;
                href: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "Href";
                href: string;
                label?: string | undefined;
            }, {
                id: string;
                type: "Href";
                href: string;
                label?: string | undefined;
            }>]>, "strip"> | undefined;
            interruptResumeValue?: {
                value: string;
                type: "SELECT_OPTION";
            } | {
                value: string;
                type: "INPUT_TEXT";
            } | undefined;
        } | undefined;
        id?: string | undefined;
        user?: {
            id?: string | undefined;
            name?: string | undefined;
        } | undefined;
        refusal?: string | undefined;
        reader?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
        isError?: boolean | undefined;
        traceData?: {
            transactionId?: string | undefined;
            traceId?: string | undefined;
        } | undefined;
    }>, "many">>;
    /**
     * LLM API configuration.
     */
    apiConfig: z.ZodOptional<z.ZodObject<{
        /**
         * Connector ID
         */
        connectorId: z.ZodString;
        /**
         * Action type ID
         */
        actionTypeId: z.ZodString;
        /**
         * Default system prompt ID
         */
        defaultSystemPromptId: z.ZodOptional<z.ZodString>;
        /**
         * Provider
         */
        provider: z.ZodOptional<z.ZodEnum<["OpenAI", "Azure OpenAI", "Other"]>>;
        /**
         * Model
         */
        model: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        connectorId: string;
        actionTypeId: string;
        model?: string | undefined;
        defaultSystemPromptId?: string | undefined;
        provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
    }, {
        connectorId: string;
        actionTypeId: string;
        model?: string | undefined;
        defaultSystemPromptId?: string | undefined;
        provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
    }>>;
    /**
     * Exclude from last conversation storage.
     */
    excludeFromLastConversationStorage: z.ZodOptional<z.ZodBoolean>;
    /**
     * Kibana space
     */
    namespace: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title: string;
    id: string;
    namespace: string;
    users: {
        id?: string | undefined;
        name?: string | undefined;
    }[];
    category: "assistant" | "insights";
    createdAt: string;
    createdBy: {
        id?: string | undefined;
        name?: string | undefined;
    };
    timestamp?: string | undefined;
    updatedAt?: string | undefined;
    replacements?: z.objectOutputType<{}, z.ZodString, "strip"> | undefined;
    messages?: {
        role: "user" | "system" | "assistant";
        content: string;
        timestamp: string;
        metadata?: {
            interruptValue?: {
                type: "SELECT_OPTION";
                options: {
                    value: string;
                    label: string;
                    buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                }[];
                description: string;
                threadId: string;
                expired?: boolean | undefined;
            } | {
                type: "INPUT_TEXT";
                threadId: string;
                placeholder?: string | undefined;
                description?: string | undefined;
                expired?: boolean | undefined;
            } | undefined;
            contentReferences?: z.objectOutputType<{}, z.ZodUnion<[z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"KnowledgeBaseEntry">;
                knowledgeBaseEntryId: z.ZodString;
                knowledgeBaseEntryName: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "KnowledgeBaseEntry";
                knowledgeBaseEntryId: string;
                knowledgeBaseEntryName: string;
            }, {
                id: string;
                type: "KnowledgeBaseEntry";
                knowledgeBaseEntryId: string;
                knowledgeBaseEntryName: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"SecurityAlert">;
                alertId: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "SecurityAlert";
                alertId: string;
            }, {
                id: string;
                type: "SecurityAlert";
                alertId: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"SecurityAlertsPage">;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "SecurityAlertsPage";
            }, {
                id: string;
                type: "SecurityAlertsPage";
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"ProductDocumentation">;
                title: z.ZodString;
                url: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                title: string;
                id: string;
                type: "ProductDocumentation";
                url: string;
            }, {
                title: string;
                id: string;
                type: "ProductDocumentation";
                url: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"EsqlQuery">;
                query: z.ZodString;
                label: z.ZodString;
                timerange: z.ZodOptional<z.ZodObject<{
                    from: z.ZodString;
                    to: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    from: string;
                    to: string;
                }, {
                    from: string;
                    to: string;
                }>>;
            }, "strip", z.ZodTypeAny, {
                label: string;
                id: string;
                type: "EsqlQuery";
                query: string;
                timerange?: {
                    from: string;
                    to: string;
                } | undefined;
            }, {
                label: string;
                id: string;
                type: "EsqlQuery";
                query: string;
                timerange?: {
                    from: string;
                    to: string;
                } | undefined;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"Href">;
                label: z.ZodOptional<z.ZodString>;
                href: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "Href";
                href: string;
                label?: string | undefined;
            }, {
                id: string;
                type: "Href";
                href: string;
                label?: string | undefined;
            }>]>, "strip"> | undefined;
            interruptResumeValue?: {
                value: string;
                type: "SELECT_OPTION";
            } | {
                value: string;
                type: "INPUT_TEXT";
            } | undefined;
        } | undefined;
        id?: string | undefined;
        user?: {
            id?: string | undefined;
            name?: string | undefined;
        } | undefined;
        refusal?: string | undefined;
        reader?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
        isError?: boolean | undefined;
        traceData?: {
            transactionId?: string | undefined;
            traceId?: string | undefined;
        } | undefined;
    }[] | undefined;
    apiConfig?: {
        connectorId: string;
        actionTypeId: string;
        model?: string | undefined;
        defaultSystemPromptId?: string | undefined;
        provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
    } | undefined;
    excludeFromLastConversationStorage?: boolean | undefined;
}, {
    title: string;
    id: string;
    namespace: string;
    users: {
        id?: string | undefined;
        name?: string | undefined;
    }[];
    category: "assistant" | "insights";
    createdAt: string;
    createdBy: {
        id?: string | undefined;
        name?: string | undefined;
    };
    timestamp?: string | undefined;
    updatedAt?: string | undefined;
    replacements?: z.objectInputType<{}, z.ZodString, "strip"> | undefined;
    messages?: {
        role: "user" | "system" | "assistant";
        content: string;
        timestamp: string;
        metadata?: {
            interruptValue?: {
                type: "SELECT_OPTION";
                options: {
                    value: string;
                    label: string;
                    buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                }[];
                description: string;
                threadId: string;
                expired?: boolean | undefined;
            } | {
                type: "INPUT_TEXT";
                threadId: string;
                placeholder?: string | undefined;
                description?: string | undefined;
                expired?: boolean | undefined;
            } | undefined;
            contentReferences?: z.objectInputType<{}, z.ZodUnion<[z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"KnowledgeBaseEntry">;
                knowledgeBaseEntryId: z.ZodString;
                knowledgeBaseEntryName: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "KnowledgeBaseEntry";
                knowledgeBaseEntryId: string;
                knowledgeBaseEntryName: string;
            }, {
                id: string;
                type: "KnowledgeBaseEntry";
                knowledgeBaseEntryId: string;
                knowledgeBaseEntryName: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"SecurityAlert">;
                alertId: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "SecurityAlert";
                alertId: string;
            }, {
                id: string;
                type: "SecurityAlert";
                alertId: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"SecurityAlertsPage">;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "SecurityAlertsPage";
            }, {
                id: string;
                type: "SecurityAlertsPage";
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"ProductDocumentation">;
                title: z.ZodString;
                url: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                title: string;
                id: string;
                type: "ProductDocumentation";
                url: string;
            }, {
                title: string;
                id: string;
                type: "ProductDocumentation";
                url: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"EsqlQuery">;
                query: z.ZodString;
                label: z.ZodString;
                timerange: z.ZodOptional<z.ZodObject<{
                    from: z.ZodString;
                    to: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    from: string;
                    to: string;
                }, {
                    from: string;
                    to: string;
                }>>;
            }, "strip", z.ZodTypeAny, {
                label: string;
                id: string;
                type: "EsqlQuery";
                query: string;
                timerange?: {
                    from: string;
                    to: string;
                } | undefined;
            }, {
                label: string;
                id: string;
                type: "EsqlQuery";
                query: string;
                timerange?: {
                    from: string;
                    to: string;
                } | undefined;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"Href">;
                label: z.ZodOptional<z.ZodString>;
                href: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "Href";
                href: string;
                label?: string | undefined;
            }, {
                id: string;
                type: "Href";
                href: string;
                label?: string | undefined;
            }>]>, "strip"> | undefined;
            interruptResumeValue?: {
                value: string;
                type: "SELECT_OPTION";
            } | {
                value: string;
                type: "INPUT_TEXT";
            } | undefined;
        } | undefined;
        id?: string | undefined;
        user?: {
            id?: string | undefined;
            name?: string | undefined;
        } | undefined;
        refusal?: string | undefined;
        reader?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
        isError?: boolean | undefined;
        traceData?: {
            transactionId?: string | undefined;
            traceId?: string | undefined;
        } | undefined;
    }[] | undefined;
    apiConfig?: {
        connectorId: string;
        actionTypeId: string;
        model?: string | undefined;
        defaultSystemPromptId?: string | undefined;
        provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
    } | undefined;
    excludeFromLastConversationStorage?: boolean | undefined;
}>;
export type ConversationUpdateProps = z.infer<typeof ConversationUpdateProps>;
export declare const ConversationUpdateProps: z.ZodObject<{
    id: z.ZodEffects<z.ZodString, string, string>;
    /**
     * The conversation title.
     */
    title: z.ZodOptional<z.ZodString>;
    /**
     * The conversation category.
     */
    category: z.ZodOptional<z.ZodEnum<["assistant", "insights"]>>;
    /**
     * The conversation messages.
     */
    messages: z.ZodOptional<z.ZodArray<z.ZodObject<{
        /**
         * Message id
         */
        id: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
        /**
         * Message content.
         */
        content: z.ZodString;
        /**
         * Refusal reason returned by the model when content is filtered.
         */
        refusal: z.ZodOptional<z.ZodString>;
        /**
         * Message content.
         */
        reader: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>>;
        /**
         * Message role.
         */
        role: z.ZodEnum<["system", "user", "assistant"]>;
        /**
         * The user who sent the message.
         */
        user: z.ZodOptional<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            id?: string | undefined;
            name?: string | undefined;
        }, {
            id?: string | undefined;
            name?: string | undefined;
        }>>;
        /**
         * The timestamp message was sent or received.
         */
        timestamp: z.ZodEffects<z.ZodString, string, string>;
        /**
         * Is error message.
         */
        isError: z.ZodOptional<z.ZodBoolean>;
        /**
         * Trace data
         */
        traceData: z.ZodOptional<z.ZodObject<{
            /**
             * Could be any string, not necessarily a UUID
             */
            transactionId: z.ZodOptional<z.ZodString>;
            /**
             * Could be any string, not necessarily a UUID
             */
            traceId: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            transactionId?: string | undefined;
            traceId?: string | undefined;
        }, {
            transactionId?: string | undefined;
            traceId?: string | undefined;
        }>>;
        /**
         * Metadata
         */
        metadata: z.ZodOptional<z.ZodObject<{
            /**
             * Data referred to by the message content.
             */
            contentReferences: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"KnowledgeBaseEntry">;
                knowledgeBaseEntryId: z.ZodString;
                knowledgeBaseEntryName: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "KnowledgeBaseEntry";
                knowledgeBaseEntryId: string;
                knowledgeBaseEntryName: string;
            }, {
                id: string;
                type: "KnowledgeBaseEntry";
                knowledgeBaseEntryId: string;
                knowledgeBaseEntryName: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"SecurityAlert">;
                alertId: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "SecurityAlert";
                alertId: string;
            }, {
                id: string;
                type: "SecurityAlert";
                alertId: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"SecurityAlertsPage">;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "SecurityAlertsPage";
            }, {
                id: string;
                type: "SecurityAlertsPage";
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"ProductDocumentation">;
                title: z.ZodString;
                url: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                title: string;
                id: string;
                type: "ProductDocumentation";
                url: string;
            }, {
                title: string;
                id: string;
                type: "ProductDocumentation";
                url: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"EsqlQuery">;
                query: z.ZodString;
                label: z.ZodString;
                timerange: z.ZodOptional<z.ZodObject<{
                    from: z.ZodString;
                    to: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    from: string;
                    to: string;
                }, {
                    from: string;
                    to: string;
                }>>;
            }, "strip", z.ZodTypeAny, {
                label: string;
                id: string;
                type: "EsqlQuery";
                query: string;
                timerange?: {
                    from: string;
                    to: string;
                } | undefined;
            }, {
                label: string;
                id: string;
                type: "EsqlQuery";
                query: string;
                timerange?: {
                    from: string;
                    to: string;
                } | undefined;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"Href">;
                label: z.ZodOptional<z.ZodString>;
                href: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "Href";
                href: string;
                label?: string | undefined;
            }, {
                id: string;
                type: "Href";
                href: string;
                label?: string | undefined;
            }>]>, z.objectOutputType<{}, z.ZodUnion<[z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"KnowledgeBaseEntry">;
                knowledgeBaseEntryId: z.ZodString;
                knowledgeBaseEntryName: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "KnowledgeBaseEntry";
                knowledgeBaseEntryId: string;
                knowledgeBaseEntryName: string;
            }, {
                id: string;
                type: "KnowledgeBaseEntry";
                knowledgeBaseEntryId: string;
                knowledgeBaseEntryName: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"SecurityAlert">;
                alertId: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "SecurityAlert";
                alertId: string;
            }, {
                id: string;
                type: "SecurityAlert";
                alertId: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"SecurityAlertsPage">;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "SecurityAlertsPage";
            }, {
                id: string;
                type: "SecurityAlertsPage";
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"ProductDocumentation">;
                title: z.ZodString;
                url: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                title: string;
                id: string;
                type: "ProductDocumentation";
                url: string;
            }, {
                title: string;
                id: string;
                type: "ProductDocumentation";
                url: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"EsqlQuery">;
                query: z.ZodString;
                label: z.ZodString;
                timerange: z.ZodOptional<z.ZodObject<{
                    from: z.ZodString;
                    to: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    from: string;
                    to: string;
                }, {
                    from: string;
                    to: string;
                }>>;
            }, "strip", z.ZodTypeAny, {
                label: string;
                id: string;
                type: "EsqlQuery";
                query: string;
                timerange?: {
                    from: string;
                    to: string;
                } | undefined;
            }, {
                label: string;
                id: string;
                type: "EsqlQuery";
                query: string;
                timerange?: {
                    from: string;
                    to: string;
                } | undefined;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"Href">;
                label: z.ZodOptional<z.ZodString>;
                href: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "Href";
                href: string;
                label?: string | undefined;
            }, {
                id: string;
                type: "Href";
                href: string;
                label?: string | undefined;
            }>]>, "strip">, z.objectInputType<{}, z.ZodUnion<[z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"KnowledgeBaseEntry">;
                knowledgeBaseEntryId: z.ZodString;
                knowledgeBaseEntryName: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "KnowledgeBaseEntry";
                knowledgeBaseEntryId: string;
                knowledgeBaseEntryName: string;
            }, {
                id: string;
                type: "KnowledgeBaseEntry";
                knowledgeBaseEntryId: string;
                knowledgeBaseEntryName: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"SecurityAlert">;
                alertId: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "SecurityAlert";
                alertId: string;
            }, {
                id: string;
                type: "SecurityAlert";
                alertId: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"SecurityAlertsPage">;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "SecurityAlertsPage";
            }, {
                id: string;
                type: "SecurityAlertsPage";
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"ProductDocumentation">;
                title: z.ZodString;
                url: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                title: string;
                id: string;
                type: "ProductDocumentation";
                url: string;
            }, {
                title: string;
                id: string;
                type: "ProductDocumentation";
                url: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"EsqlQuery">;
                query: z.ZodString;
                label: z.ZodString;
                timerange: z.ZodOptional<z.ZodObject<{
                    from: z.ZodString;
                    to: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    from: string;
                    to: string;
                }, {
                    from: string;
                    to: string;
                }>>;
            }, "strip", z.ZodTypeAny, {
                label: string;
                id: string;
                type: "EsqlQuery";
                query: string;
                timerange?: {
                    from: string;
                    to: string;
                } | undefined;
            }, {
                label: string;
                id: string;
                type: "EsqlQuery";
                query: string;
                timerange?: {
                    from: string;
                    to: string;
                } | undefined;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"Href">;
                label: z.ZodOptional<z.ZodString>;
                href: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "Href";
                href: string;
                label?: string | undefined;
            }, {
                id: string;
                type: "Href";
                href: string;
                label?: string | undefined;
            }>]>, "strip">>>;
            /**
             * When the agent is interrupted (for example, when user input is required), this field is populated with the details of the interrupt. Messages containing interruptValues in the metadata are excluded from the LLM context.
             */
            interruptValue: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
                expired: z.ZodOptional<z.ZodBoolean>;
                threadId: z.ZodString;
            } & {
                type: z.ZodLiteral<"SELECT_OPTION">;
                description: z.ZodString;
                options: z.ZodArray<z.ZodObject<{
                    label: z.ZodString;
                    value: z.ZodString;
                    buttonColor: z.ZodOptional<z.ZodEnum<["text", "accent", "accentSecondary", "primary", "success", "warning", "danger", "neutral", "risk"]>>;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    label: string;
                    buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                }, {
                    value: string;
                    label: string;
                    buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                }>, "many">;
            }, "strip", z.ZodTypeAny, {
                type: "SELECT_OPTION";
                options: {
                    value: string;
                    label: string;
                    buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                }[];
                description: string;
                threadId: string;
                expired?: boolean | undefined;
            }, {
                type: "SELECT_OPTION";
                options: {
                    value: string;
                    label: string;
                    buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                }[];
                description: string;
                threadId: string;
                expired?: boolean | undefined;
            }>, z.ZodObject<{
                expired: z.ZodOptional<z.ZodBoolean>;
                threadId: z.ZodString;
            } & {
                type: z.ZodLiteral<"INPUT_TEXT">;
                description: z.ZodOptional<z.ZodString>;
                placeholder: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                type: "INPUT_TEXT";
                threadId: string;
                placeholder?: string | undefined;
                description?: string | undefined;
                expired?: boolean | undefined;
            }, {
                type: "INPUT_TEXT";
                threadId: string;
                placeholder?: string | undefined;
                description?: string | undefined;
                expired?: boolean | undefined;
            }>]>>;
            /**
             * When the agent is resumed after an interrupt, this field is populated with the details of the resume value.
             */
            interruptResumeValue: z.ZodOptional<z.ZodUnion<[z.ZodObject<{} & {
                type: z.ZodLiteral<"SELECT_OPTION">;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                type: "SELECT_OPTION";
            }, {
                value: string;
                type: "SELECT_OPTION";
            }>, z.ZodObject<{} & {
                type: z.ZodLiteral<"INPUT_TEXT">;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                type: "INPUT_TEXT";
            }, {
                value: string;
                type: "INPUT_TEXT";
            }>]>>;
        }, "strip", z.ZodTypeAny, {
            interruptValue?: {
                type: "SELECT_OPTION";
                options: {
                    value: string;
                    label: string;
                    buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                }[];
                description: string;
                threadId: string;
                expired?: boolean | undefined;
            } | {
                type: "INPUT_TEXT";
                threadId: string;
                placeholder?: string | undefined;
                description?: string | undefined;
                expired?: boolean | undefined;
            } | undefined;
            contentReferences?: z.objectOutputType<{}, z.ZodUnion<[z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"KnowledgeBaseEntry">;
                knowledgeBaseEntryId: z.ZodString;
                knowledgeBaseEntryName: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "KnowledgeBaseEntry";
                knowledgeBaseEntryId: string;
                knowledgeBaseEntryName: string;
            }, {
                id: string;
                type: "KnowledgeBaseEntry";
                knowledgeBaseEntryId: string;
                knowledgeBaseEntryName: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"SecurityAlert">;
                alertId: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "SecurityAlert";
                alertId: string;
            }, {
                id: string;
                type: "SecurityAlert";
                alertId: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"SecurityAlertsPage">;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "SecurityAlertsPage";
            }, {
                id: string;
                type: "SecurityAlertsPage";
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"ProductDocumentation">;
                title: z.ZodString;
                url: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                title: string;
                id: string;
                type: "ProductDocumentation";
                url: string;
            }, {
                title: string;
                id: string;
                type: "ProductDocumentation";
                url: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"EsqlQuery">;
                query: z.ZodString;
                label: z.ZodString;
                timerange: z.ZodOptional<z.ZodObject<{
                    from: z.ZodString;
                    to: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    from: string;
                    to: string;
                }, {
                    from: string;
                    to: string;
                }>>;
            }, "strip", z.ZodTypeAny, {
                label: string;
                id: string;
                type: "EsqlQuery";
                query: string;
                timerange?: {
                    from: string;
                    to: string;
                } | undefined;
            }, {
                label: string;
                id: string;
                type: "EsqlQuery";
                query: string;
                timerange?: {
                    from: string;
                    to: string;
                } | undefined;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"Href">;
                label: z.ZodOptional<z.ZodString>;
                href: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "Href";
                href: string;
                label?: string | undefined;
            }, {
                id: string;
                type: "Href";
                href: string;
                label?: string | undefined;
            }>]>, "strip"> | undefined;
            interruptResumeValue?: {
                value: string;
                type: "SELECT_OPTION";
            } | {
                value: string;
                type: "INPUT_TEXT";
            } | undefined;
        }, {
            interruptValue?: {
                type: "SELECT_OPTION";
                options: {
                    value: string;
                    label: string;
                    buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                }[];
                description: string;
                threadId: string;
                expired?: boolean | undefined;
            } | {
                type: "INPUT_TEXT";
                threadId: string;
                placeholder?: string | undefined;
                description?: string | undefined;
                expired?: boolean | undefined;
            } | undefined;
            contentReferences?: z.objectInputType<{}, z.ZodUnion<[z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"KnowledgeBaseEntry">;
                knowledgeBaseEntryId: z.ZodString;
                knowledgeBaseEntryName: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "KnowledgeBaseEntry";
                knowledgeBaseEntryId: string;
                knowledgeBaseEntryName: string;
            }, {
                id: string;
                type: "KnowledgeBaseEntry";
                knowledgeBaseEntryId: string;
                knowledgeBaseEntryName: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"SecurityAlert">;
                alertId: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "SecurityAlert";
                alertId: string;
            }, {
                id: string;
                type: "SecurityAlert";
                alertId: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"SecurityAlertsPage">;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "SecurityAlertsPage";
            }, {
                id: string;
                type: "SecurityAlertsPage";
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"ProductDocumentation">;
                title: z.ZodString;
                url: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                title: string;
                id: string;
                type: "ProductDocumentation";
                url: string;
            }, {
                title: string;
                id: string;
                type: "ProductDocumentation";
                url: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"EsqlQuery">;
                query: z.ZodString;
                label: z.ZodString;
                timerange: z.ZodOptional<z.ZodObject<{
                    from: z.ZodString;
                    to: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    from: string;
                    to: string;
                }, {
                    from: string;
                    to: string;
                }>>;
            }, "strip", z.ZodTypeAny, {
                label: string;
                id: string;
                type: "EsqlQuery";
                query: string;
                timerange?: {
                    from: string;
                    to: string;
                } | undefined;
            }, {
                label: string;
                id: string;
                type: "EsqlQuery";
                query: string;
                timerange?: {
                    from: string;
                    to: string;
                } | undefined;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"Href">;
                label: z.ZodOptional<z.ZodString>;
                href: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "Href";
                href: string;
                label?: string | undefined;
            }, {
                id: string;
                type: "Href";
                href: string;
                label?: string | undefined;
            }>]>, "strip"> | undefined;
            interruptResumeValue?: {
                value: string;
                type: "SELECT_OPTION";
            } | {
                value: string;
                type: "INPUT_TEXT";
            } | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        role: "user" | "system" | "assistant";
        content: string;
        timestamp: string;
        metadata?: {
            interruptValue?: {
                type: "SELECT_OPTION";
                options: {
                    value: string;
                    label: string;
                    buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                }[];
                description: string;
                threadId: string;
                expired?: boolean | undefined;
            } | {
                type: "INPUT_TEXT";
                threadId: string;
                placeholder?: string | undefined;
                description?: string | undefined;
                expired?: boolean | undefined;
            } | undefined;
            contentReferences?: z.objectOutputType<{}, z.ZodUnion<[z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"KnowledgeBaseEntry">;
                knowledgeBaseEntryId: z.ZodString;
                knowledgeBaseEntryName: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "KnowledgeBaseEntry";
                knowledgeBaseEntryId: string;
                knowledgeBaseEntryName: string;
            }, {
                id: string;
                type: "KnowledgeBaseEntry";
                knowledgeBaseEntryId: string;
                knowledgeBaseEntryName: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"SecurityAlert">;
                alertId: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "SecurityAlert";
                alertId: string;
            }, {
                id: string;
                type: "SecurityAlert";
                alertId: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"SecurityAlertsPage">;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "SecurityAlertsPage";
            }, {
                id: string;
                type: "SecurityAlertsPage";
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"ProductDocumentation">;
                title: z.ZodString;
                url: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                title: string;
                id: string;
                type: "ProductDocumentation";
                url: string;
            }, {
                title: string;
                id: string;
                type: "ProductDocumentation";
                url: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"EsqlQuery">;
                query: z.ZodString;
                label: z.ZodString;
                timerange: z.ZodOptional<z.ZodObject<{
                    from: z.ZodString;
                    to: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    from: string;
                    to: string;
                }, {
                    from: string;
                    to: string;
                }>>;
            }, "strip", z.ZodTypeAny, {
                label: string;
                id: string;
                type: "EsqlQuery";
                query: string;
                timerange?: {
                    from: string;
                    to: string;
                } | undefined;
            }, {
                label: string;
                id: string;
                type: "EsqlQuery";
                query: string;
                timerange?: {
                    from: string;
                    to: string;
                } | undefined;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"Href">;
                label: z.ZodOptional<z.ZodString>;
                href: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "Href";
                href: string;
                label?: string | undefined;
            }, {
                id: string;
                type: "Href";
                href: string;
                label?: string | undefined;
            }>]>, "strip"> | undefined;
            interruptResumeValue?: {
                value: string;
                type: "SELECT_OPTION";
            } | {
                value: string;
                type: "INPUT_TEXT";
            } | undefined;
        } | undefined;
        id?: string | undefined;
        user?: {
            id?: string | undefined;
            name?: string | undefined;
        } | undefined;
        refusal?: string | undefined;
        reader?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
        isError?: boolean | undefined;
        traceData?: {
            transactionId?: string | undefined;
            traceId?: string | undefined;
        } | undefined;
    }, {
        role: "user" | "system" | "assistant";
        content: string;
        timestamp: string;
        metadata?: {
            interruptValue?: {
                type: "SELECT_OPTION";
                options: {
                    value: string;
                    label: string;
                    buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                }[];
                description: string;
                threadId: string;
                expired?: boolean | undefined;
            } | {
                type: "INPUT_TEXT";
                threadId: string;
                placeholder?: string | undefined;
                description?: string | undefined;
                expired?: boolean | undefined;
            } | undefined;
            contentReferences?: z.objectInputType<{}, z.ZodUnion<[z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"KnowledgeBaseEntry">;
                knowledgeBaseEntryId: z.ZodString;
                knowledgeBaseEntryName: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "KnowledgeBaseEntry";
                knowledgeBaseEntryId: string;
                knowledgeBaseEntryName: string;
            }, {
                id: string;
                type: "KnowledgeBaseEntry";
                knowledgeBaseEntryId: string;
                knowledgeBaseEntryName: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"SecurityAlert">;
                alertId: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "SecurityAlert";
                alertId: string;
            }, {
                id: string;
                type: "SecurityAlert";
                alertId: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"SecurityAlertsPage">;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "SecurityAlertsPage";
            }, {
                id: string;
                type: "SecurityAlertsPage";
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"ProductDocumentation">;
                title: z.ZodString;
                url: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                title: string;
                id: string;
                type: "ProductDocumentation";
                url: string;
            }, {
                title: string;
                id: string;
                type: "ProductDocumentation";
                url: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"EsqlQuery">;
                query: z.ZodString;
                label: z.ZodString;
                timerange: z.ZodOptional<z.ZodObject<{
                    from: z.ZodString;
                    to: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    from: string;
                    to: string;
                }, {
                    from: string;
                    to: string;
                }>>;
            }, "strip", z.ZodTypeAny, {
                label: string;
                id: string;
                type: "EsqlQuery";
                query: string;
                timerange?: {
                    from: string;
                    to: string;
                } | undefined;
            }, {
                label: string;
                id: string;
                type: "EsqlQuery";
                query: string;
                timerange?: {
                    from: string;
                    to: string;
                } | undefined;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"Href">;
                label: z.ZodOptional<z.ZodString>;
                href: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "Href";
                href: string;
                label?: string | undefined;
            }, {
                id: string;
                type: "Href";
                href: string;
                label?: string | undefined;
            }>]>, "strip"> | undefined;
            interruptResumeValue?: {
                value: string;
                type: "SELECT_OPTION";
            } | {
                value: string;
                type: "INPUT_TEXT";
            } | undefined;
        } | undefined;
        id?: string | undefined;
        user?: {
            id?: string | undefined;
            name?: string | undefined;
        } | undefined;
        refusal?: string | undefined;
        reader?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
        isError?: boolean | undefined;
        traceData?: {
            transactionId?: string | undefined;
            traceId?: string | undefined;
        } | undefined;
    }>, "many">>;
    /**
     * LLM API configuration.
     */
    apiConfig: z.ZodOptional<z.ZodObject<{
        /**
         * Connector ID
         */
        connectorId: z.ZodString;
        /**
         * Action type ID
         */
        actionTypeId: z.ZodString;
        /**
         * Default system prompt ID
         */
        defaultSystemPromptId: z.ZodOptional<z.ZodString>;
        /**
         * Provider
         */
        provider: z.ZodOptional<z.ZodEnum<["OpenAI", "Azure OpenAI", "Other"]>>;
        /**
         * Model
         */
        model: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        connectorId: string;
        actionTypeId: string;
        model?: string | undefined;
        defaultSystemPromptId?: string | undefined;
        provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
    }, {
        connectorId: string;
        actionTypeId: string;
        model?: string | undefined;
        defaultSystemPromptId?: string | undefined;
        provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
    }>>;
    /**
     * Exclude from last conversation storage.
     */
    excludeFromLastConversationStorage: z.ZodOptional<z.ZodBoolean>;
    replacements: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodString, z.objectOutputType<{}, z.ZodString, "strip">, z.objectInputType<{}, z.ZodString, "strip">>>;
    users: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        id?: string | undefined;
        name?: string | undefined;
    }, {
        id?: string | undefined;
        name?: string | undefined;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    id: string;
    title?: string | undefined;
    users?: {
        id?: string | undefined;
        name?: string | undefined;
    }[] | undefined;
    category?: "assistant" | "insights" | undefined;
    replacements?: z.objectOutputType<{}, z.ZodString, "strip"> | undefined;
    messages?: {
        role: "user" | "system" | "assistant";
        content: string;
        timestamp: string;
        metadata?: {
            interruptValue?: {
                type: "SELECT_OPTION";
                options: {
                    value: string;
                    label: string;
                    buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                }[];
                description: string;
                threadId: string;
                expired?: boolean | undefined;
            } | {
                type: "INPUT_TEXT";
                threadId: string;
                placeholder?: string | undefined;
                description?: string | undefined;
                expired?: boolean | undefined;
            } | undefined;
            contentReferences?: z.objectOutputType<{}, z.ZodUnion<[z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"KnowledgeBaseEntry">;
                knowledgeBaseEntryId: z.ZodString;
                knowledgeBaseEntryName: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "KnowledgeBaseEntry";
                knowledgeBaseEntryId: string;
                knowledgeBaseEntryName: string;
            }, {
                id: string;
                type: "KnowledgeBaseEntry";
                knowledgeBaseEntryId: string;
                knowledgeBaseEntryName: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"SecurityAlert">;
                alertId: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "SecurityAlert";
                alertId: string;
            }, {
                id: string;
                type: "SecurityAlert";
                alertId: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"SecurityAlertsPage">;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "SecurityAlertsPage";
            }, {
                id: string;
                type: "SecurityAlertsPage";
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"ProductDocumentation">;
                title: z.ZodString;
                url: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                title: string;
                id: string;
                type: "ProductDocumentation";
                url: string;
            }, {
                title: string;
                id: string;
                type: "ProductDocumentation";
                url: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"EsqlQuery">;
                query: z.ZodString;
                label: z.ZodString;
                timerange: z.ZodOptional<z.ZodObject<{
                    from: z.ZodString;
                    to: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    from: string;
                    to: string;
                }, {
                    from: string;
                    to: string;
                }>>;
            }, "strip", z.ZodTypeAny, {
                label: string;
                id: string;
                type: "EsqlQuery";
                query: string;
                timerange?: {
                    from: string;
                    to: string;
                } | undefined;
            }, {
                label: string;
                id: string;
                type: "EsqlQuery";
                query: string;
                timerange?: {
                    from: string;
                    to: string;
                } | undefined;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"Href">;
                label: z.ZodOptional<z.ZodString>;
                href: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "Href";
                href: string;
                label?: string | undefined;
            }, {
                id: string;
                type: "Href";
                href: string;
                label?: string | undefined;
            }>]>, "strip"> | undefined;
            interruptResumeValue?: {
                value: string;
                type: "SELECT_OPTION";
            } | {
                value: string;
                type: "INPUT_TEXT";
            } | undefined;
        } | undefined;
        id?: string | undefined;
        user?: {
            id?: string | undefined;
            name?: string | undefined;
        } | undefined;
        refusal?: string | undefined;
        reader?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
        isError?: boolean | undefined;
        traceData?: {
            transactionId?: string | undefined;
            traceId?: string | undefined;
        } | undefined;
    }[] | undefined;
    apiConfig?: {
        connectorId: string;
        actionTypeId: string;
        model?: string | undefined;
        defaultSystemPromptId?: string | undefined;
        provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
    } | undefined;
    excludeFromLastConversationStorage?: boolean | undefined;
}, {
    id: string;
    title?: string | undefined;
    users?: {
        id?: string | undefined;
        name?: string | undefined;
    }[] | undefined;
    category?: "assistant" | "insights" | undefined;
    replacements?: z.objectInputType<{}, z.ZodString, "strip"> | undefined;
    messages?: {
        role: "user" | "system" | "assistant";
        content: string;
        timestamp: string;
        metadata?: {
            interruptValue?: {
                type: "SELECT_OPTION";
                options: {
                    value: string;
                    label: string;
                    buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                }[];
                description: string;
                threadId: string;
                expired?: boolean | undefined;
            } | {
                type: "INPUT_TEXT";
                threadId: string;
                placeholder?: string | undefined;
                description?: string | undefined;
                expired?: boolean | undefined;
            } | undefined;
            contentReferences?: z.objectInputType<{}, z.ZodUnion<[z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"KnowledgeBaseEntry">;
                knowledgeBaseEntryId: z.ZodString;
                knowledgeBaseEntryName: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "KnowledgeBaseEntry";
                knowledgeBaseEntryId: string;
                knowledgeBaseEntryName: string;
            }, {
                id: string;
                type: "KnowledgeBaseEntry";
                knowledgeBaseEntryId: string;
                knowledgeBaseEntryName: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"SecurityAlert">;
                alertId: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "SecurityAlert";
                alertId: string;
            }, {
                id: string;
                type: "SecurityAlert";
                alertId: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"SecurityAlertsPage">;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "SecurityAlertsPage";
            }, {
                id: string;
                type: "SecurityAlertsPage";
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"ProductDocumentation">;
                title: z.ZodString;
                url: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                title: string;
                id: string;
                type: "ProductDocumentation";
                url: string;
            }, {
                title: string;
                id: string;
                type: "ProductDocumentation";
                url: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"EsqlQuery">;
                query: z.ZodString;
                label: z.ZodString;
                timerange: z.ZodOptional<z.ZodObject<{
                    from: z.ZodString;
                    to: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    from: string;
                    to: string;
                }, {
                    from: string;
                    to: string;
                }>>;
            }, "strip", z.ZodTypeAny, {
                label: string;
                id: string;
                type: "EsqlQuery";
                query: string;
                timerange?: {
                    from: string;
                    to: string;
                } | undefined;
            }, {
                label: string;
                id: string;
                type: "EsqlQuery";
                query: string;
                timerange?: {
                    from: string;
                    to: string;
                } | undefined;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"Href">;
                label: z.ZodOptional<z.ZodString>;
                href: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "Href";
                href: string;
                label?: string | undefined;
            }, {
                id: string;
                type: "Href";
                href: string;
                label?: string | undefined;
            }>]>, "strip"> | undefined;
            interruptResumeValue?: {
                value: string;
                type: "SELECT_OPTION";
            } | {
                value: string;
                type: "INPUT_TEXT";
            } | undefined;
        } | undefined;
        id?: string | undefined;
        user?: {
            id?: string | undefined;
            name?: string | undefined;
        } | undefined;
        refusal?: string | undefined;
        reader?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
        isError?: boolean | undefined;
        traceData?: {
            transactionId?: string | undefined;
            traceId?: string | undefined;
        } | undefined;
    }[] | undefined;
    apiConfig?: {
        connectorId: string;
        actionTypeId: string;
        model?: string | undefined;
        defaultSystemPromptId?: string | undefined;
        provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
    } | undefined;
    excludeFromLastConversationStorage?: boolean | undefined;
}>;
export type ConversationCreateProps = z.infer<typeof ConversationCreateProps>;
export declare const ConversationCreateProps: z.ZodObject<{
    /**
     * The conversation id.
     */
    id: z.ZodOptional<z.ZodString>;
    /**
     * The conversation title.
     */
    title: z.ZodString;
    /**
     * The conversation category.
     */
    category: z.ZodOptional<z.ZodEnum<["assistant", "insights"]>>;
    /**
     * The conversation messages.
     */
    messages: z.ZodOptional<z.ZodArray<z.ZodObject<{
        /**
         * Message id
         */
        id: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
        /**
         * Message content.
         */
        content: z.ZodString;
        /**
         * Refusal reason returned by the model when content is filtered.
         */
        refusal: z.ZodOptional<z.ZodString>;
        /**
         * Message content.
         */
        reader: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>>;
        /**
         * Message role.
         */
        role: z.ZodEnum<["system", "user", "assistant"]>;
        /**
         * The user who sent the message.
         */
        user: z.ZodOptional<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            id?: string | undefined;
            name?: string | undefined;
        }, {
            id?: string | undefined;
            name?: string | undefined;
        }>>;
        /**
         * The timestamp message was sent or received.
         */
        timestamp: z.ZodEffects<z.ZodString, string, string>;
        /**
         * Is error message.
         */
        isError: z.ZodOptional<z.ZodBoolean>;
        /**
         * Trace data
         */
        traceData: z.ZodOptional<z.ZodObject<{
            /**
             * Could be any string, not necessarily a UUID
             */
            transactionId: z.ZodOptional<z.ZodString>;
            /**
             * Could be any string, not necessarily a UUID
             */
            traceId: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            transactionId?: string | undefined;
            traceId?: string | undefined;
        }, {
            transactionId?: string | undefined;
            traceId?: string | undefined;
        }>>;
        /**
         * Metadata
         */
        metadata: z.ZodOptional<z.ZodObject<{
            /**
             * Data referred to by the message content.
             */
            contentReferences: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"KnowledgeBaseEntry">;
                knowledgeBaseEntryId: z.ZodString;
                knowledgeBaseEntryName: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "KnowledgeBaseEntry";
                knowledgeBaseEntryId: string;
                knowledgeBaseEntryName: string;
            }, {
                id: string;
                type: "KnowledgeBaseEntry";
                knowledgeBaseEntryId: string;
                knowledgeBaseEntryName: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"SecurityAlert">;
                alertId: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "SecurityAlert";
                alertId: string;
            }, {
                id: string;
                type: "SecurityAlert";
                alertId: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"SecurityAlertsPage">;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "SecurityAlertsPage";
            }, {
                id: string;
                type: "SecurityAlertsPage";
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"ProductDocumentation">;
                title: z.ZodString;
                url: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                title: string;
                id: string;
                type: "ProductDocumentation";
                url: string;
            }, {
                title: string;
                id: string;
                type: "ProductDocumentation";
                url: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"EsqlQuery">;
                query: z.ZodString;
                label: z.ZodString;
                timerange: z.ZodOptional<z.ZodObject<{
                    from: z.ZodString;
                    to: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    from: string;
                    to: string;
                }, {
                    from: string;
                    to: string;
                }>>;
            }, "strip", z.ZodTypeAny, {
                label: string;
                id: string;
                type: "EsqlQuery";
                query: string;
                timerange?: {
                    from: string;
                    to: string;
                } | undefined;
            }, {
                label: string;
                id: string;
                type: "EsqlQuery";
                query: string;
                timerange?: {
                    from: string;
                    to: string;
                } | undefined;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"Href">;
                label: z.ZodOptional<z.ZodString>;
                href: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "Href";
                href: string;
                label?: string | undefined;
            }, {
                id: string;
                type: "Href";
                href: string;
                label?: string | undefined;
            }>]>, z.objectOutputType<{}, z.ZodUnion<[z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"KnowledgeBaseEntry">;
                knowledgeBaseEntryId: z.ZodString;
                knowledgeBaseEntryName: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "KnowledgeBaseEntry";
                knowledgeBaseEntryId: string;
                knowledgeBaseEntryName: string;
            }, {
                id: string;
                type: "KnowledgeBaseEntry";
                knowledgeBaseEntryId: string;
                knowledgeBaseEntryName: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"SecurityAlert">;
                alertId: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "SecurityAlert";
                alertId: string;
            }, {
                id: string;
                type: "SecurityAlert";
                alertId: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"SecurityAlertsPage">;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "SecurityAlertsPage";
            }, {
                id: string;
                type: "SecurityAlertsPage";
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"ProductDocumentation">;
                title: z.ZodString;
                url: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                title: string;
                id: string;
                type: "ProductDocumentation";
                url: string;
            }, {
                title: string;
                id: string;
                type: "ProductDocumentation";
                url: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"EsqlQuery">;
                query: z.ZodString;
                label: z.ZodString;
                timerange: z.ZodOptional<z.ZodObject<{
                    from: z.ZodString;
                    to: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    from: string;
                    to: string;
                }, {
                    from: string;
                    to: string;
                }>>;
            }, "strip", z.ZodTypeAny, {
                label: string;
                id: string;
                type: "EsqlQuery";
                query: string;
                timerange?: {
                    from: string;
                    to: string;
                } | undefined;
            }, {
                label: string;
                id: string;
                type: "EsqlQuery";
                query: string;
                timerange?: {
                    from: string;
                    to: string;
                } | undefined;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"Href">;
                label: z.ZodOptional<z.ZodString>;
                href: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "Href";
                href: string;
                label?: string | undefined;
            }, {
                id: string;
                type: "Href";
                href: string;
                label?: string | undefined;
            }>]>, "strip">, z.objectInputType<{}, z.ZodUnion<[z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"KnowledgeBaseEntry">;
                knowledgeBaseEntryId: z.ZodString;
                knowledgeBaseEntryName: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "KnowledgeBaseEntry";
                knowledgeBaseEntryId: string;
                knowledgeBaseEntryName: string;
            }, {
                id: string;
                type: "KnowledgeBaseEntry";
                knowledgeBaseEntryId: string;
                knowledgeBaseEntryName: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"SecurityAlert">;
                alertId: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "SecurityAlert";
                alertId: string;
            }, {
                id: string;
                type: "SecurityAlert";
                alertId: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"SecurityAlertsPage">;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "SecurityAlertsPage";
            }, {
                id: string;
                type: "SecurityAlertsPage";
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"ProductDocumentation">;
                title: z.ZodString;
                url: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                title: string;
                id: string;
                type: "ProductDocumentation";
                url: string;
            }, {
                title: string;
                id: string;
                type: "ProductDocumentation";
                url: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"EsqlQuery">;
                query: z.ZodString;
                label: z.ZodString;
                timerange: z.ZodOptional<z.ZodObject<{
                    from: z.ZodString;
                    to: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    from: string;
                    to: string;
                }, {
                    from: string;
                    to: string;
                }>>;
            }, "strip", z.ZodTypeAny, {
                label: string;
                id: string;
                type: "EsqlQuery";
                query: string;
                timerange?: {
                    from: string;
                    to: string;
                } | undefined;
            }, {
                label: string;
                id: string;
                type: "EsqlQuery";
                query: string;
                timerange?: {
                    from: string;
                    to: string;
                } | undefined;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"Href">;
                label: z.ZodOptional<z.ZodString>;
                href: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "Href";
                href: string;
                label?: string | undefined;
            }, {
                id: string;
                type: "Href";
                href: string;
                label?: string | undefined;
            }>]>, "strip">>>;
            /**
             * When the agent is interrupted (for example, when user input is required), this field is populated with the details of the interrupt. Messages containing interruptValues in the metadata are excluded from the LLM context.
             */
            interruptValue: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
                expired: z.ZodOptional<z.ZodBoolean>;
                threadId: z.ZodString;
            } & {
                type: z.ZodLiteral<"SELECT_OPTION">;
                description: z.ZodString;
                options: z.ZodArray<z.ZodObject<{
                    label: z.ZodString;
                    value: z.ZodString;
                    buttonColor: z.ZodOptional<z.ZodEnum<["text", "accent", "accentSecondary", "primary", "success", "warning", "danger", "neutral", "risk"]>>;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    label: string;
                    buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                }, {
                    value: string;
                    label: string;
                    buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                }>, "many">;
            }, "strip", z.ZodTypeAny, {
                type: "SELECT_OPTION";
                options: {
                    value: string;
                    label: string;
                    buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                }[];
                description: string;
                threadId: string;
                expired?: boolean | undefined;
            }, {
                type: "SELECT_OPTION";
                options: {
                    value: string;
                    label: string;
                    buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                }[];
                description: string;
                threadId: string;
                expired?: boolean | undefined;
            }>, z.ZodObject<{
                expired: z.ZodOptional<z.ZodBoolean>;
                threadId: z.ZodString;
            } & {
                type: z.ZodLiteral<"INPUT_TEXT">;
                description: z.ZodOptional<z.ZodString>;
                placeholder: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                type: "INPUT_TEXT";
                threadId: string;
                placeholder?: string | undefined;
                description?: string | undefined;
                expired?: boolean | undefined;
            }, {
                type: "INPUT_TEXT";
                threadId: string;
                placeholder?: string | undefined;
                description?: string | undefined;
                expired?: boolean | undefined;
            }>]>>;
            /**
             * When the agent is resumed after an interrupt, this field is populated with the details of the resume value.
             */
            interruptResumeValue: z.ZodOptional<z.ZodUnion<[z.ZodObject<{} & {
                type: z.ZodLiteral<"SELECT_OPTION">;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                type: "SELECT_OPTION";
            }, {
                value: string;
                type: "SELECT_OPTION";
            }>, z.ZodObject<{} & {
                type: z.ZodLiteral<"INPUT_TEXT">;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                type: "INPUT_TEXT";
            }, {
                value: string;
                type: "INPUT_TEXT";
            }>]>>;
        }, "strip", z.ZodTypeAny, {
            interruptValue?: {
                type: "SELECT_OPTION";
                options: {
                    value: string;
                    label: string;
                    buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                }[];
                description: string;
                threadId: string;
                expired?: boolean | undefined;
            } | {
                type: "INPUT_TEXT";
                threadId: string;
                placeholder?: string | undefined;
                description?: string | undefined;
                expired?: boolean | undefined;
            } | undefined;
            contentReferences?: z.objectOutputType<{}, z.ZodUnion<[z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"KnowledgeBaseEntry">;
                knowledgeBaseEntryId: z.ZodString;
                knowledgeBaseEntryName: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "KnowledgeBaseEntry";
                knowledgeBaseEntryId: string;
                knowledgeBaseEntryName: string;
            }, {
                id: string;
                type: "KnowledgeBaseEntry";
                knowledgeBaseEntryId: string;
                knowledgeBaseEntryName: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"SecurityAlert">;
                alertId: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "SecurityAlert";
                alertId: string;
            }, {
                id: string;
                type: "SecurityAlert";
                alertId: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"SecurityAlertsPage">;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "SecurityAlertsPage";
            }, {
                id: string;
                type: "SecurityAlertsPage";
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"ProductDocumentation">;
                title: z.ZodString;
                url: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                title: string;
                id: string;
                type: "ProductDocumentation";
                url: string;
            }, {
                title: string;
                id: string;
                type: "ProductDocumentation";
                url: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"EsqlQuery">;
                query: z.ZodString;
                label: z.ZodString;
                timerange: z.ZodOptional<z.ZodObject<{
                    from: z.ZodString;
                    to: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    from: string;
                    to: string;
                }, {
                    from: string;
                    to: string;
                }>>;
            }, "strip", z.ZodTypeAny, {
                label: string;
                id: string;
                type: "EsqlQuery";
                query: string;
                timerange?: {
                    from: string;
                    to: string;
                } | undefined;
            }, {
                label: string;
                id: string;
                type: "EsqlQuery";
                query: string;
                timerange?: {
                    from: string;
                    to: string;
                } | undefined;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"Href">;
                label: z.ZodOptional<z.ZodString>;
                href: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "Href";
                href: string;
                label?: string | undefined;
            }, {
                id: string;
                type: "Href";
                href: string;
                label?: string | undefined;
            }>]>, "strip"> | undefined;
            interruptResumeValue?: {
                value: string;
                type: "SELECT_OPTION";
            } | {
                value: string;
                type: "INPUT_TEXT";
            } | undefined;
        }, {
            interruptValue?: {
                type: "SELECT_OPTION";
                options: {
                    value: string;
                    label: string;
                    buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                }[];
                description: string;
                threadId: string;
                expired?: boolean | undefined;
            } | {
                type: "INPUT_TEXT";
                threadId: string;
                placeholder?: string | undefined;
                description?: string | undefined;
                expired?: boolean | undefined;
            } | undefined;
            contentReferences?: z.objectInputType<{}, z.ZodUnion<[z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"KnowledgeBaseEntry">;
                knowledgeBaseEntryId: z.ZodString;
                knowledgeBaseEntryName: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "KnowledgeBaseEntry";
                knowledgeBaseEntryId: string;
                knowledgeBaseEntryName: string;
            }, {
                id: string;
                type: "KnowledgeBaseEntry";
                knowledgeBaseEntryId: string;
                knowledgeBaseEntryName: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"SecurityAlert">;
                alertId: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "SecurityAlert";
                alertId: string;
            }, {
                id: string;
                type: "SecurityAlert";
                alertId: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"SecurityAlertsPage">;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "SecurityAlertsPage";
            }, {
                id: string;
                type: "SecurityAlertsPage";
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"ProductDocumentation">;
                title: z.ZodString;
                url: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                title: string;
                id: string;
                type: "ProductDocumentation";
                url: string;
            }, {
                title: string;
                id: string;
                type: "ProductDocumentation";
                url: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"EsqlQuery">;
                query: z.ZodString;
                label: z.ZodString;
                timerange: z.ZodOptional<z.ZodObject<{
                    from: z.ZodString;
                    to: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    from: string;
                    to: string;
                }, {
                    from: string;
                    to: string;
                }>>;
            }, "strip", z.ZodTypeAny, {
                label: string;
                id: string;
                type: "EsqlQuery";
                query: string;
                timerange?: {
                    from: string;
                    to: string;
                } | undefined;
            }, {
                label: string;
                id: string;
                type: "EsqlQuery";
                query: string;
                timerange?: {
                    from: string;
                    to: string;
                } | undefined;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"Href">;
                label: z.ZodOptional<z.ZodString>;
                href: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "Href";
                href: string;
                label?: string | undefined;
            }, {
                id: string;
                type: "Href";
                href: string;
                label?: string | undefined;
            }>]>, "strip"> | undefined;
            interruptResumeValue?: {
                value: string;
                type: "SELECT_OPTION";
            } | {
                value: string;
                type: "INPUT_TEXT";
            } | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        role: "user" | "system" | "assistant";
        content: string;
        timestamp: string;
        metadata?: {
            interruptValue?: {
                type: "SELECT_OPTION";
                options: {
                    value: string;
                    label: string;
                    buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                }[];
                description: string;
                threadId: string;
                expired?: boolean | undefined;
            } | {
                type: "INPUT_TEXT";
                threadId: string;
                placeholder?: string | undefined;
                description?: string | undefined;
                expired?: boolean | undefined;
            } | undefined;
            contentReferences?: z.objectOutputType<{}, z.ZodUnion<[z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"KnowledgeBaseEntry">;
                knowledgeBaseEntryId: z.ZodString;
                knowledgeBaseEntryName: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "KnowledgeBaseEntry";
                knowledgeBaseEntryId: string;
                knowledgeBaseEntryName: string;
            }, {
                id: string;
                type: "KnowledgeBaseEntry";
                knowledgeBaseEntryId: string;
                knowledgeBaseEntryName: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"SecurityAlert">;
                alertId: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "SecurityAlert";
                alertId: string;
            }, {
                id: string;
                type: "SecurityAlert";
                alertId: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"SecurityAlertsPage">;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "SecurityAlertsPage";
            }, {
                id: string;
                type: "SecurityAlertsPage";
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"ProductDocumentation">;
                title: z.ZodString;
                url: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                title: string;
                id: string;
                type: "ProductDocumentation";
                url: string;
            }, {
                title: string;
                id: string;
                type: "ProductDocumentation";
                url: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"EsqlQuery">;
                query: z.ZodString;
                label: z.ZodString;
                timerange: z.ZodOptional<z.ZodObject<{
                    from: z.ZodString;
                    to: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    from: string;
                    to: string;
                }, {
                    from: string;
                    to: string;
                }>>;
            }, "strip", z.ZodTypeAny, {
                label: string;
                id: string;
                type: "EsqlQuery";
                query: string;
                timerange?: {
                    from: string;
                    to: string;
                } | undefined;
            }, {
                label: string;
                id: string;
                type: "EsqlQuery";
                query: string;
                timerange?: {
                    from: string;
                    to: string;
                } | undefined;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"Href">;
                label: z.ZodOptional<z.ZodString>;
                href: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "Href";
                href: string;
                label?: string | undefined;
            }, {
                id: string;
                type: "Href";
                href: string;
                label?: string | undefined;
            }>]>, "strip"> | undefined;
            interruptResumeValue?: {
                value: string;
                type: "SELECT_OPTION";
            } | {
                value: string;
                type: "INPUT_TEXT";
            } | undefined;
        } | undefined;
        id?: string | undefined;
        user?: {
            id?: string | undefined;
            name?: string | undefined;
        } | undefined;
        refusal?: string | undefined;
        reader?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
        isError?: boolean | undefined;
        traceData?: {
            transactionId?: string | undefined;
            traceId?: string | undefined;
        } | undefined;
    }, {
        role: "user" | "system" | "assistant";
        content: string;
        timestamp: string;
        metadata?: {
            interruptValue?: {
                type: "SELECT_OPTION";
                options: {
                    value: string;
                    label: string;
                    buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                }[];
                description: string;
                threadId: string;
                expired?: boolean | undefined;
            } | {
                type: "INPUT_TEXT";
                threadId: string;
                placeholder?: string | undefined;
                description?: string | undefined;
                expired?: boolean | undefined;
            } | undefined;
            contentReferences?: z.objectInputType<{}, z.ZodUnion<[z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"KnowledgeBaseEntry">;
                knowledgeBaseEntryId: z.ZodString;
                knowledgeBaseEntryName: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "KnowledgeBaseEntry";
                knowledgeBaseEntryId: string;
                knowledgeBaseEntryName: string;
            }, {
                id: string;
                type: "KnowledgeBaseEntry";
                knowledgeBaseEntryId: string;
                knowledgeBaseEntryName: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"SecurityAlert">;
                alertId: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "SecurityAlert";
                alertId: string;
            }, {
                id: string;
                type: "SecurityAlert";
                alertId: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"SecurityAlertsPage">;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "SecurityAlertsPage";
            }, {
                id: string;
                type: "SecurityAlertsPage";
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"ProductDocumentation">;
                title: z.ZodString;
                url: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                title: string;
                id: string;
                type: "ProductDocumentation";
                url: string;
            }, {
                title: string;
                id: string;
                type: "ProductDocumentation";
                url: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"EsqlQuery">;
                query: z.ZodString;
                label: z.ZodString;
                timerange: z.ZodOptional<z.ZodObject<{
                    from: z.ZodString;
                    to: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    from: string;
                    to: string;
                }, {
                    from: string;
                    to: string;
                }>>;
            }, "strip", z.ZodTypeAny, {
                label: string;
                id: string;
                type: "EsqlQuery";
                query: string;
                timerange?: {
                    from: string;
                    to: string;
                } | undefined;
            }, {
                label: string;
                id: string;
                type: "EsqlQuery";
                query: string;
                timerange?: {
                    from: string;
                    to: string;
                } | undefined;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"Href">;
                label: z.ZodOptional<z.ZodString>;
                href: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "Href";
                href: string;
                label?: string | undefined;
            }, {
                id: string;
                type: "Href";
                href: string;
                label?: string | undefined;
            }>]>, "strip"> | undefined;
            interruptResumeValue?: {
                value: string;
                type: "SELECT_OPTION";
            } | {
                value: string;
                type: "INPUT_TEXT";
            } | undefined;
        } | undefined;
        id?: string | undefined;
        user?: {
            id?: string | undefined;
            name?: string | undefined;
        } | undefined;
        refusal?: string | undefined;
        reader?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
        isError?: boolean | undefined;
        traceData?: {
            transactionId?: string | undefined;
            traceId?: string | undefined;
        } | undefined;
    }>, "many">>;
    /**
     * LLM API configuration.
     */
    apiConfig: z.ZodOptional<z.ZodObject<{
        /**
         * Connector ID
         */
        connectorId: z.ZodString;
        /**
         * Action type ID
         */
        actionTypeId: z.ZodString;
        /**
         * Default system prompt ID
         */
        defaultSystemPromptId: z.ZodOptional<z.ZodString>;
        /**
         * Provider
         */
        provider: z.ZodOptional<z.ZodEnum<["OpenAI", "Azure OpenAI", "Other"]>>;
        /**
         * Model
         */
        model: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        connectorId: string;
        actionTypeId: string;
        model?: string | undefined;
        defaultSystemPromptId?: string | undefined;
        provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
    }, {
        connectorId: string;
        actionTypeId: string;
        model?: string | undefined;
        defaultSystemPromptId?: string | undefined;
        provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
    }>>;
    /**
     * Exclude from last conversation storage.
     */
    excludeFromLastConversationStorage: z.ZodOptional<z.ZodBoolean>;
    replacements: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodString, z.objectOutputType<{}, z.ZodString, "strip">, z.objectInputType<{}, z.ZodString, "strip">>>;
}, "strip", z.ZodTypeAny, {
    title: string;
    id?: string | undefined;
    category?: "assistant" | "insights" | undefined;
    replacements?: z.objectOutputType<{}, z.ZodString, "strip"> | undefined;
    messages?: {
        role: "user" | "system" | "assistant";
        content: string;
        timestamp: string;
        metadata?: {
            interruptValue?: {
                type: "SELECT_OPTION";
                options: {
                    value: string;
                    label: string;
                    buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                }[];
                description: string;
                threadId: string;
                expired?: boolean | undefined;
            } | {
                type: "INPUT_TEXT";
                threadId: string;
                placeholder?: string | undefined;
                description?: string | undefined;
                expired?: boolean | undefined;
            } | undefined;
            contentReferences?: z.objectOutputType<{}, z.ZodUnion<[z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"KnowledgeBaseEntry">;
                knowledgeBaseEntryId: z.ZodString;
                knowledgeBaseEntryName: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "KnowledgeBaseEntry";
                knowledgeBaseEntryId: string;
                knowledgeBaseEntryName: string;
            }, {
                id: string;
                type: "KnowledgeBaseEntry";
                knowledgeBaseEntryId: string;
                knowledgeBaseEntryName: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"SecurityAlert">;
                alertId: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "SecurityAlert";
                alertId: string;
            }, {
                id: string;
                type: "SecurityAlert";
                alertId: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"SecurityAlertsPage">;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "SecurityAlertsPage";
            }, {
                id: string;
                type: "SecurityAlertsPage";
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"ProductDocumentation">;
                title: z.ZodString;
                url: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                title: string;
                id: string;
                type: "ProductDocumentation";
                url: string;
            }, {
                title: string;
                id: string;
                type: "ProductDocumentation";
                url: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"EsqlQuery">;
                query: z.ZodString;
                label: z.ZodString;
                timerange: z.ZodOptional<z.ZodObject<{
                    from: z.ZodString;
                    to: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    from: string;
                    to: string;
                }, {
                    from: string;
                    to: string;
                }>>;
            }, "strip", z.ZodTypeAny, {
                label: string;
                id: string;
                type: "EsqlQuery";
                query: string;
                timerange?: {
                    from: string;
                    to: string;
                } | undefined;
            }, {
                label: string;
                id: string;
                type: "EsqlQuery";
                query: string;
                timerange?: {
                    from: string;
                    to: string;
                } | undefined;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"Href">;
                label: z.ZodOptional<z.ZodString>;
                href: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "Href";
                href: string;
                label?: string | undefined;
            }, {
                id: string;
                type: "Href";
                href: string;
                label?: string | undefined;
            }>]>, "strip"> | undefined;
            interruptResumeValue?: {
                value: string;
                type: "SELECT_OPTION";
            } | {
                value: string;
                type: "INPUT_TEXT";
            } | undefined;
        } | undefined;
        id?: string | undefined;
        user?: {
            id?: string | undefined;
            name?: string | undefined;
        } | undefined;
        refusal?: string | undefined;
        reader?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
        isError?: boolean | undefined;
        traceData?: {
            transactionId?: string | undefined;
            traceId?: string | undefined;
        } | undefined;
    }[] | undefined;
    apiConfig?: {
        connectorId: string;
        actionTypeId: string;
        model?: string | undefined;
        defaultSystemPromptId?: string | undefined;
        provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
    } | undefined;
    excludeFromLastConversationStorage?: boolean | undefined;
}, {
    title: string;
    id?: string | undefined;
    category?: "assistant" | "insights" | undefined;
    replacements?: z.objectInputType<{}, z.ZodString, "strip"> | undefined;
    messages?: {
        role: "user" | "system" | "assistant";
        content: string;
        timestamp: string;
        metadata?: {
            interruptValue?: {
                type: "SELECT_OPTION";
                options: {
                    value: string;
                    label: string;
                    buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                }[];
                description: string;
                threadId: string;
                expired?: boolean | undefined;
            } | {
                type: "INPUT_TEXT";
                threadId: string;
                placeholder?: string | undefined;
                description?: string | undefined;
                expired?: boolean | undefined;
            } | undefined;
            contentReferences?: z.objectInputType<{}, z.ZodUnion<[z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"KnowledgeBaseEntry">;
                knowledgeBaseEntryId: z.ZodString;
                knowledgeBaseEntryName: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "KnowledgeBaseEntry";
                knowledgeBaseEntryId: string;
                knowledgeBaseEntryName: string;
            }, {
                id: string;
                type: "KnowledgeBaseEntry";
                knowledgeBaseEntryId: string;
                knowledgeBaseEntryName: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"SecurityAlert">;
                alertId: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "SecurityAlert";
                alertId: string;
            }, {
                id: string;
                type: "SecurityAlert";
                alertId: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"SecurityAlertsPage">;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "SecurityAlertsPage";
            }, {
                id: string;
                type: "SecurityAlertsPage";
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"ProductDocumentation">;
                title: z.ZodString;
                url: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                title: string;
                id: string;
                type: "ProductDocumentation";
                url: string;
            }, {
                title: string;
                id: string;
                type: "ProductDocumentation";
                url: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"EsqlQuery">;
                query: z.ZodString;
                label: z.ZodString;
                timerange: z.ZodOptional<z.ZodObject<{
                    from: z.ZodString;
                    to: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    from: string;
                    to: string;
                }, {
                    from: string;
                    to: string;
                }>>;
            }, "strip", z.ZodTypeAny, {
                label: string;
                id: string;
                type: "EsqlQuery";
                query: string;
                timerange?: {
                    from: string;
                    to: string;
                } | undefined;
            }, {
                label: string;
                id: string;
                type: "EsqlQuery";
                query: string;
                timerange?: {
                    from: string;
                    to: string;
                } | undefined;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"Href">;
                label: z.ZodOptional<z.ZodString>;
                href: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "Href";
                href: string;
                label?: string | undefined;
            }, {
                id: string;
                type: "Href";
                href: string;
                label?: string | undefined;
            }>]>, "strip"> | undefined;
            interruptResumeValue?: {
                value: string;
                type: "SELECT_OPTION";
            } | {
                value: string;
                type: "INPUT_TEXT";
            } | undefined;
        } | undefined;
        id?: string | undefined;
        user?: {
            id?: string | undefined;
            name?: string | undefined;
        } | undefined;
        refusal?: string | undefined;
        reader?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
        isError?: boolean | undefined;
        traceData?: {
            transactionId?: string | undefined;
            traceId?: string | undefined;
        } | undefined;
    }[] | undefined;
    apiConfig?: {
        connectorId: string;
        actionTypeId: string;
        model?: string | undefined;
        defaultSystemPromptId?: string | undefined;
        provider?: "Other" | "OpenAI" | "Azure OpenAI" | undefined;
    } | undefined;
    excludeFromLastConversationStorage?: boolean | undefined;
}>;
export type ConversationMessageCreateProps = z.infer<typeof ConversationMessageCreateProps>;
export declare const ConversationMessageCreateProps: z.ZodObject<{
    /**
     * The conversation messages.
     */
    messages: z.ZodArray<z.ZodObject<{
        /**
         * Message id
         */
        id: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
        /**
         * Message content.
         */
        content: z.ZodString;
        /**
         * Refusal reason returned by the model when content is filtered.
         */
        refusal: z.ZodOptional<z.ZodString>;
        /**
         * Message content.
         */
        reader: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodUnknown, z.objectOutputType<{}, z.ZodUnknown, "strip">, z.objectInputType<{}, z.ZodUnknown, "strip">>>;
        /**
         * Message role.
         */
        role: z.ZodEnum<["system", "user", "assistant"]>;
        /**
         * The user who sent the message.
         */
        user: z.ZodOptional<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            name: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            id?: string | undefined;
            name?: string | undefined;
        }, {
            id?: string | undefined;
            name?: string | undefined;
        }>>;
        /**
         * The timestamp message was sent or received.
         */
        timestamp: z.ZodEffects<z.ZodString, string, string>;
        /**
         * Is error message.
         */
        isError: z.ZodOptional<z.ZodBoolean>;
        /**
         * Trace data
         */
        traceData: z.ZodOptional<z.ZodObject<{
            /**
             * Could be any string, not necessarily a UUID
             */
            transactionId: z.ZodOptional<z.ZodString>;
            /**
             * Could be any string, not necessarily a UUID
             */
            traceId: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            transactionId?: string | undefined;
            traceId?: string | undefined;
        }, {
            transactionId?: string | undefined;
            traceId?: string | undefined;
        }>>;
        /**
         * Metadata
         */
        metadata: z.ZodOptional<z.ZodObject<{
            /**
             * Data referred to by the message content.
             */
            contentReferences: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"KnowledgeBaseEntry">;
                knowledgeBaseEntryId: z.ZodString;
                knowledgeBaseEntryName: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "KnowledgeBaseEntry";
                knowledgeBaseEntryId: string;
                knowledgeBaseEntryName: string;
            }, {
                id: string;
                type: "KnowledgeBaseEntry";
                knowledgeBaseEntryId: string;
                knowledgeBaseEntryName: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"SecurityAlert">;
                alertId: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "SecurityAlert";
                alertId: string;
            }, {
                id: string;
                type: "SecurityAlert";
                alertId: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"SecurityAlertsPage">;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "SecurityAlertsPage";
            }, {
                id: string;
                type: "SecurityAlertsPage";
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"ProductDocumentation">;
                title: z.ZodString;
                url: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                title: string;
                id: string;
                type: "ProductDocumentation";
                url: string;
            }, {
                title: string;
                id: string;
                type: "ProductDocumentation";
                url: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"EsqlQuery">;
                query: z.ZodString;
                label: z.ZodString;
                timerange: z.ZodOptional<z.ZodObject<{
                    from: z.ZodString;
                    to: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    from: string;
                    to: string;
                }, {
                    from: string;
                    to: string;
                }>>;
            }, "strip", z.ZodTypeAny, {
                label: string;
                id: string;
                type: "EsqlQuery";
                query: string;
                timerange?: {
                    from: string;
                    to: string;
                } | undefined;
            }, {
                label: string;
                id: string;
                type: "EsqlQuery";
                query: string;
                timerange?: {
                    from: string;
                    to: string;
                } | undefined;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"Href">;
                label: z.ZodOptional<z.ZodString>;
                href: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "Href";
                href: string;
                label?: string | undefined;
            }, {
                id: string;
                type: "Href";
                href: string;
                label?: string | undefined;
            }>]>, z.objectOutputType<{}, z.ZodUnion<[z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"KnowledgeBaseEntry">;
                knowledgeBaseEntryId: z.ZodString;
                knowledgeBaseEntryName: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "KnowledgeBaseEntry";
                knowledgeBaseEntryId: string;
                knowledgeBaseEntryName: string;
            }, {
                id: string;
                type: "KnowledgeBaseEntry";
                knowledgeBaseEntryId: string;
                knowledgeBaseEntryName: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"SecurityAlert">;
                alertId: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "SecurityAlert";
                alertId: string;
            }, {
                id: string;
                type: "SecurityAlert";
                alertId: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"SecurityAlertsPage">;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "SecurityAlertsPage";
            }, {
                id: string;
                type: "SecurityAlertsPage";
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"ProductDocumentation">;
                title: z.ZodString;
                url: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                title: string;
                id: string;
                type: "ProductDocumentation";
                url: string;
            }, {
                title: string;
                id: string;
                type: "ProductDocumentation";
                url: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"EsqlQuery">;
                query: z.ZodString;
                label: z.ZodString;
                timerange: z.ZodOptional<z.ZodObject<{
                    from: z.ZodString;
                    to: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    from: string;
                    to: string;
                }, {
                    from: string;
                    to: string;
                }>>;
            }, "strip", z.ZodTypeAny, {
                label: string;
                id: string;
                type: "EsqlQuery";
                query: string;
                timerange?: {
                    from: string;
                    to: string;
                } | undefined;
            }, {
                label: string;
                id: string;
                type: "EsqlQuery";
                query: string;
                timerange?: {
                    from: string;
                    to: string;
                } | undefined;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"Href">;
                label: z.ZodOptional<z.ZodString>;
                href: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "Href";
                href: string;
                label?: string | undefined;
            }, {
                id: string;
                type: "Href";
                href: string;
                label?: string | undefined;
            }>]>, "strip">, z.objectInputType<{}, z.ZodUnion<[z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"KnowledgeBaseEntry">;
                knowledgeBaseEntryId: z.ZodString;
                knowledgeBaseEntryName: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "KnowledgeBaseEntry";
                knowledgeBaseEntryId: string;
                knowledgeBaseEntryName: string;
            }, {
                id: string;
                type: "KnowledgeBaseEntry";
                knowledgeBaseEntryId: string;
                knowledgeBaseEntryName: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"SecurityAlert">;
                alertId: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "SecurityAlert";
                alertId: string;
            }, {
                id: string;
                type: "SecurityAlert";
                alertId: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"SecurityAlertsPage">;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "SecurityAlertsPage";
            }, {
                id: string;
                type: "SecurityAlertsPage";
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"ProductDocumentation">;
                title: z.ZodString;
                url: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                title: string;
                id: string;
                type: "ProductDocumentation";
                url: string;
            }, {
                title: string;
                id: string;
                type: "ProductDocumentation";
                url: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"EsqlQuery">;
                query: z.ZodString;
                label: z.ZodString;
                timerange: z.ZodOptional<z.ZodObject<{
                    from: z.ZodString;
                    to: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    from: string;
                    to: string;
                }, {
                    from: string;
                    to: string;
                }>>;
            }, "strip", z.ZodTypeAny, {
                label: string;
                id: string;
                type: "EsqlQuery";
                query: string;
                timerange?: {
                    from: string;
                    to: string;
                } | undefined;
            }, {
                label: string;
                id: string;
                type: "EsqlQuery";
                query: string;
                timerange?: {
                    from: string;
                    to: string;
                } | undefined;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"Href">;
                label: z.ZodOptional<z.ZodString>;
                href: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "Href";
                href: string;
                label?: string | undefined;
            }, {
                id: string;
                type: "Href";
                href: string;
                label?: string | undefined;
            }>]>, "strip">>>;
            /**
             * When the agent is interrupted (for example, when user input is required), this field is populated with the details of the interrupt. Messages containing interruptValues in the metadata are excluded from the LLM context.
             */
            interruptValue: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
                expired: z.ZodOptional<z.ZodBoolean>;
                threadId: z.ZodString;
            } & {
                type: z.ZodLiteral<"SELECT_OPTION">;
                description: z.ZodString;
                options: z.ZodArray<z.ZodObject<{
                    label: z.ZodString;
                    value: z.ZodString;
                    buttonColor: z.ZodOptional<z.ZodEnum<["text", "accent", "accentSecondary", "primary", "success", "warning", "danger", "neutral", "risk"]>>;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    label: string;
                    buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                }, {
                    value: string;
                    label: string;
                    buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                }>, "many">;
            }, "strip", z.ZodTypeAny, {
                type: "SELECT_OPTION";
                options: {
                    value: string;
                    label: string;
                    buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                }[];
                description: string;
                threadId: string;
                expired?: boolean | undefined;
            }, {
                type: "SELECT_OPTION";
                options: {
                    value: string;
                    label: string;
                    buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                }[];
                description: string;
                threadId: string;
                expired?: boolean | undefined;
            }>, z.ZodObject<{
                expired: z.ZodOptional<z.ZodBoolean>;
                threadId: z.ZodString;
            } & {
                type: z.ZodLiteral<"INPUT_TEXT">;
                description: z.ZodOptional<z.ZodString>;
                placeholder: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                type: "INPUT_TEXT";
                threadId: string;
                placeholder?: string | undefined;
                description?: string | undefined;
                expired?: boolean | undefined;
            }, {
                type: "INPUT_TEXT";
                threadId: string;
                placeholder?: string | undefined;
                description?: string | undefined;
                expired?: boolean | undefined;
            }>]>>;
            /**
             * When the agent is resumed after an interrupt, this field is populated with the details of the resume value.
             */
            interruptResumeValue: z.ZodOptional<z.ZodUnion<[z.ZodObject<{} & {
                type: z.ZodLiteral<"SELECT_OPTION">;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                type: "SELECT_OPTION";
            }, {
                value: string;
                type: "SELECT_OPTION";
            }>, z.ZodObject<{} & {
                type: z.ZodLiteral<"INPUT_TEXT">;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                type: "INPUT_TEXT";
            }, {
                value: string;
                type: "INPUT_TEXT";
            }>]>>;
        }, "strip", z.ZodTypeAny, {
            interruptValue?: {
                type: "SELECT_OPTION";
                options: {
                    value: string;
                    label: string;
                    buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                }[];
                description: string;
                threadId: string;
                expired?: boolean | undefined;
            } | {
                type: "INPUT_TEXT";
                threadId: string;
                placeholder?: string | undefined;
                description?: string | undefined;
                expired?: boolean | undefined;
            } | undefined;
            contentReferences?: z.objectOutputType<{}, z.ZodUnion<[z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"KnowledgeBaseEntry">;
                knowledgeBaseEntryId: z.ZodString;
                knowledgeBaseEntryName: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "KnowledgeBaseEntry";
                knowledgeBaseEntryId: string;
                knowledgeBaseEntryName: string;
            }, {
                id: string;
                type: "KnowledgeBaseEntry";
                knowledgeBaseEntryId: string;
                knowledgeBaseEntryName: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"SecurityAlert">;
                alertId: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "SecurityAlert";
                alertId: string;
            }, {
                id: string;
                type: "SecurityAlert";
                alertId: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"SecurityAlertsPage">;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "SecurityAlertsPage";
            }, {
                id: string;
                type: "SecurityAlertsPage";
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"ProductDocumentation">;
                title: z.ZodString;
                url: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                title: string;
                id: string;
                type: "ProductDocumentation";
                url: string;
            }, {
                title: string;
                id: string;
                type: "ProductDocumentation";
                url: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"EsqlQuery">;
                query: z.ZodString;
                label: z.ZodString;
                timerange: z.ZodOptional<z.ZodObject<{
                    from: z.ZodString;
                    to: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    from: string;
                    to: string;
                }, {
                    from: string;
                    to: string;
                }>>;
            }, "strip", z.ZodTypeAny, {
                label: string;
                id: string;
                type: "EsqlQuery";
                query: string;
                timerange?: {
                    from: string;
                    to: string;
                } | undefined;
            }, {
                label: string;
                id: string;
                type: "EsqlQuery";
                query: string;
                timerange?: {
                    from: string;
                    to: string;
                } | undefined;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"Href">;
                label: z.ZodOptional<z.ZodString>;
                href: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "Href";
                href: string;
                label?: string | undefined;
            }, {
                id: string;
                type: "Href";
                href: string;
                label?: string | undefined;
            }>]>, "strip"> | undefined;
            interruptResumeValue?: {
                value: string;
                type: "SELECT_OPTION";
            } | {
                value: string;
                type: "INPUT_TEXT";
            } | undefined;
        }, {
            interruptValue?: {
                type: "SELECT_OPTION";
                options: {
                    value: string;
                    label: string;
                    buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                }[];
                description: string;
                threadId: string;
                expired?: boolean | undefined;
            } | {
                type: "INPUT_TEXT";
                threadId: string;
                placeholder?: string | undefined;
                description?: string | undefined;
                expired?: boolean | undefined;
            } | undefined;
            contentReferences?: z.objectInputType<{}, z.ZodUnion<[z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"KnowledgeBaseEntry">;
                knowledgeBaseEntryId: z.ZodString;
                knowledgeBaseEntryName: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "KnowledgeBaseEntry";
                knowledgeBaseEntryId: string;
                knowledgeBaseEntryName: string;
            }, {
                id: string;
                type: "KnowledgeBaseEntry";
                knowledgeBaseEntryId: string;
                knowledgeBaseEntryName: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"SecurityAlert">;
                alertId: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "SecurityAlert";
                alertId: string;
            }, {
                id: string;
                type: "SecurityAlert";
                alertId: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"SecurityAlertsPage">;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "SecurityAlertsPage";
            }, {
                id: string;
                type: "SecurityAlertsPage";
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"ProductDocumentation">;
                title: z.ZodString;
                url: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                title: string;
                id: string;
                type: "ProductDocumentation";
                url: string;
            }, {
                title: string;
                id: string;
                type: "ProductDocumentation";
                url: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"EsqlQuery">;
                query: z.ZodString;
                label: z.ZodString;
                timerange: z.ZodOptional<z.ZodObject<{
                    from: z.ZodString;
                    to: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    from: string;
                    to: string;
                }, {
                    from: string;
                    to: string;
                }>>;
            }, "strip", z.ZodTypeAny, {
                label: string;
                id: string;
                type: "EsqlQuery";
                query: string;
                timerange?: {
                    from: string;
                    to: string;
                } | undefined;
            }, {
                label: string;
                id: string;
                type: "EsqlQuery";
                query: string;
                timerange?: {
                    from: string;
                    to: string;
                } | undefined;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"Href">;
                label: z.ZodOptional<z.ZodString>;
                href: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "Href";
                href: string;
                label?: string | undefined;
            }, {
                id: string;
                type: "Href";
                href: string;
                label?: string | undefined;
            }>]>, "strip"> | undefined;
            interruptResumeValue?: {
                value: string;
                type: "SELECT_OPTION";
            } | {
                value: string;
                type: "INPUT_TEXT";
            } | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        role: "user" | "system" | "assistant";
        content: string;
        timestamp: string;
        metadata?: {
            interruptValue?: {
                type: "SELECT_OPTION";
                options: {
                    value: string;
                    label: string;
                    buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                }[];
                description: string;
                threadId: string;
                expired?: boolean | undefined;
            } | {
                type: "INPUT_TEXT";
                threadId: string;
                placeholder?: string | undefined;
                description?: string | undefined;
                expired?: boolean | undefined;
            } | undefined;
            contentReferences?: z.objectOutputType<{}, z.ZodUnion<[z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"KnowledgeBaseEntry">;
                knowledgeBaseEntryId: z.ZodString;
                knowledgeBaseEntryName: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "KnowledgeBaseEntry";
                knowledgeBaseEntryId: string;
                knowledgeBaseEntryName: string;
            }, {
                id: string;
                type: "KnowledgeBaseEntry";
                knowledgeBaseEntryId: string;
                knowledgeBaseEntryName: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"SecurityAlert">;
                alertId: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "SecurityAlert";
                alertId: string;
            }, {
                id: string;
                type: "SecurityAlert";
                alertId: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"SecurityAlertsPage">;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "SecurityAlertsPage";
            }, {
                id: string;
                type: "SecurityAlertsPage";
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"ProductDocumentation">;
                title: z.ZodString;
                url: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                title: string;
                id: string;
                type: "ProductDocumentation";
                url: string;
            }, {
                title: string;
                id: string;
                type: "ProductDocumentation";
                url: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"EsqlQuery">;
                query: z.ZodString;
                label: z.ZodString;
                timerange: z.ZodOptional<z.ZodObject<{
                    from: z.ZodString;
                    to: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    from: string;
                    to: string;
                }, {
                    from: string;
                    to: string;
                }>>;
            }, "strip", z.ZodTypeAny, {
                label: string;
                id: string;
                type: "EsqlQuery";
                query: string;
                timerange?: {
                    from: string;
                    to: string;
                } | undefined;
            }, {
                label: string;
                id: string;
                type: "EsqlQuery";
                query: string;
                timerange?: {
                    from: string;
                    to: string;
                } | undefined;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"Href">;
                label: z.ZodOptional<z.ZodString>;
                href: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "Href";
                href: string;
                label?: string | undefined;
            }, {
                id: string;
                type: "Href";
                href: string;
                label?: string | undefined;
            }>]>, "strip"> | undefined;
            interruptResumeValue?: {
                value: string;
                type: "SELECT_OPTION";
            } | {
                value: string;
                type: "INPUT_TEXT";
            } | undefined;
        } | undefined;
        id?: string | undefined;
        user?: {
            id?: string | undefined;
            name?: string | undefined;
        } | undefined;
        refusal?: string | undefined;
        reader?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
        isError?: boolean | undefined;
        traceData?: {
            transactionId?: string | undefined;
            traceId?: string | undefined;
        } | undefined;
    }, {
        role: "user" | "system" | "assistant";
        content: string;
        timestamp: string;
        metadata?: {
            interruptValue?: {
                type: "SELECT_OPTION";
                options: {
                    value: string;
                    label: string;
                    buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                }[];
                description: string;
                threadId: string;
                expired?: boolean | undefined;
            } | {
                type: "INPUT_TEXT";
                threadId: string;
                placeholder?: string | undefined;
                description?: string | undefined;
                expired?: boolean | undefined;
            } | undefined;
            contentReferences?: z.objectInputType<{}, z.ZodUnion<[z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"KnowledgeBaseEntry">;
                knowledgeBaseEntryId: z.ZodString;
                knowledgeBaseEntryName: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "KnowledgeBaseEntry";
                knowledgeBaseEntryId: string;
                knowledgeBaseEntryName: string;
            }, {
                id: string;
                type: "KnowledgeBaseEntry";
                knowledgeBaseEntryId: string;
                knowledgeBaseEntryName: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"SecurityAlert">;
                alertId: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "SecurityAlert";
                alertId: string;
            }, {
                id: string;
                type: "SecurityAlert";
                alertId: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"SecurityAlertsPage">;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "SecurityAlertsPage";
            }, {
                id: string;
                type: "SecurityAlertsPage";
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"ProductDocumentation">;
                title: z.ZodString;
                url: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                title: string;
                id: string;
                type: "ProductDocumentation";
                url: string;
            }, {
                title: string;
                id: string;
                type: "ProductDocumentation";
                url: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"EsqlQuery">;
                query: z.ZodString;
                label: z.ZodString;
                timerange: z.ZodOptional<z.ZodObject<{
                    from: z.ZodString;
                    to: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    from: string;
                    to: string;
                }, {
                    from: string;
                    to: string;
                }>>;
            }, "strip", z.ZodTypeAny, {
                label: string;
                id: string;
                type: "EsqlQuery";
                query: string;
                timerange?: {
                    from: string;
                    to: string;
                } | undefined;
            }, {
                label: string;
                id: string;
                type: "EsqlQuery";
                query: string;
                timerange?: {
                    from: string;
                    to: string;
                } | undefined;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"Href">;
                label: z.ZodOptional<z.ZodString>;
                href: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "Href";
                href: string;
                label?: string | undefined;
            }, {
                id: string;
                type: "Href";
                href: string;
                label?: string | undefined;
            }>]>, "strip"> | undefined;
            interruptResumeValue?: {
                value: string;
                type: "SELECT_OPTION";
            } | {
                value: string;
                type: "INPUT_TEXT";
            } | undefined;
        } | undefined;
        id?: string | undefined;
        user?: {
            id?: string | undefined;
            name?: string | undefined;
        } | undefined;
        refusal?: string | undefined;
        reader?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
        isError?: boolean | undefined;
        traceData?: {
            transactionId?: string | undefined;
            traceId?: string | undefined;
        } | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    messages: {
        role: "user" | "system" | "assistant";
        content: string;
        timestamp: string;
        metadata?: {
            interruptValue?: {
                type: "SELECT_OPTION";
                options: {
                    value: string;
                    label: string;
                    buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                }[];
                description: string;
                threadId: string;
                expired?: boolean | undefined;
            } | {
                type: "INPUT_TEXT";
                threadId: string;
                placeholder?: string | undefined;
                description?: string | undefined;
                expired?: boolean | undefined;
            } | undefined;
            contentReferences?: z.objectOutputType<{}, z.ZodUnion<[z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"KnowledgeBaseEntry">;
                knowledgeBaseEntryId: z.ZodString;
                knowledgeBaseEntryName: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "KnowledgeBaseEntry";
                knowledgeBaseEntryId: string;
                knowledgeBaseEntryName: string;
            }, {
                id: string;
                type: "KnowledgeBaseEntry";
                knowledgeBaseEntryId: string;
                knowledgeBaseEntryName: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"SecurityAlert">;
                alertId: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "SecurityAlert";
                alertId: string;
            }, {
                id: string;
                type: "SecurityAlert";
                alertId: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"SecurityAlertsPage">;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "SecurityAlertsPage";
            }, {
                id: string;
                type: "SecurityAlertsPage";
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"ProductDocumentation">;
                title: z.ZodString;
                url: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                title: string;
                id: string;
                type: "ProductDocumentation";
                url: string;
            }, {
                title: string;
                id: string;
                type: "ProductDocumentation";
                url: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"EsqlQuery">;
                query: z.ZodString;
                label: z.ZodString;
                timerange: z.ZodOptional<z.ZodObject<{
                    from: z.ZodString;
                    to: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    from: string;
                    to: string;
                }, {
                    from: string;
                    to: string;
                }>>;
            }, "strip", z.ZodTypeAny, {
                label: string;
                id: string;
                type: "EsqlQuery";
                query: string;
                timerange?: {
                    from: string;
                    to: string;
                } | undefined;
            }, {
                label: string;
                id: string;
                type: "EsqlQuery";
                query: string;
                timerange?: {
                    from: string;
                    to: string;
                } | undefined;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"Href">;
                label: z.ZodOptional<z.ZodString>;
                href: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "Href";
                href: string;
                label?: string | undefined;
            }, {
                id: string;
                type: "Href";
                href: string;
                label?: string | undefined;
            }>]>, "strip"> | undefined;
            interruptResumeValue?: {
                value: string;
                type: "SELECT_OPTION";
            } | {
                value: string;
                type: "INPUT_TEXT";
            } | undefined;
        } | undefined;
        id?: string | undefined;
        user?: {
            id?: string | undefined;
            name?: string | undefined;
        } | undefined;
        refusal?: string | undefined;
        reader?: z.objectOutputType<{}, z.ZodUnknown, "strip"> | undefined;
        isError?: boolean | undefined;
        traceData?: {
            transactionId?: string | undefined;
            traceId?: string | undefined;
        } | undefined;
    }[];
}, {
    messages: {
        role: "user" | "system" | "assistant";
        content: string;
        timestamp: string;
        metadata?: {
            interruptValue?: {
                type: "SELECT_OPTION";
                options: {
                    value: string;
                    label: string;
                    buttonColor?: "text" | "warning" | "primary" | "neutral" | "success" | "accent" | "accentSecondary" | "risk" | "danger" | undefined;
                }[];
                description: string;
                threadId: string;
                expired?: boolean | undefined;
            } | {
                type: "INPUT_TEXT";
                threadId: string;
                placeholder?: string | undefined;
                description?: string | undefined;
                expired?: boolean | undefined;
            } | undefined;
            contentReferences?: z.objectInputType<{}, z.ZodUnion<[z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"KnowledgeBaseEntry">;
                knowledgeBaseEntryId: z.ZodString;
                knowledgeBaseEntryName: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "KnowledgeBaseEntry";
                knowledgeBaseEntryId: string;
                knowledgeBaseEntryName: string;
            }, {
                id: string;
                type: "KnowledgeBaseEntry";
                knowledgeBaseEntryId: string;
                knowledgeBaseEntryName: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"SecurityAlert">;
                alertId: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "SecurityAlert";
                alertId: string;
            }, {
                id: string;
                type: "SecurityAlert";
                alertId: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"SecurityAlertsPage">;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "SecurityAlertsPage";
            }, {
                id: string;
                type: "SecurityAlertsPage";
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"ProductDocumentation">;
                title: z.ZodString;
                url: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                title: string;
                id: string;
                type: "ProductDocumentation";
                url: string;
            }, {
                title: string;
                id: string;
                type: "ProductDocumentation";
                url: string;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"EsqlQuery">;
                query: z.ZodString;
                label: z.ZodString;
                timerange: z.ZodOptional<z.ZodObject<{
                    from: z.ZodString;
                    to: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    from: string;
                    to: string;
                }, {
                    from: string;
                    to: string;
                }>>;
            }, "strip", z.ZodTypeAny, {
                label: string;
                id: string;
                type: "EsqlQuery";
                query: string;
                timerange?: {
                    from: string;
                    to: string;
                } | undefined;
            }, {
                label: string;
                id: string;
                type: "EsqlQuery";
                query: string;
                timerange?: {
                    from: string;
                    to: string;
                } | undefined;
            }>, z.ZodObject<{
                id: z.ZodString;
            } & {
                type: z.ZodLiteral<"Href">;
                label: z.ZodOptional<z.ZodString>;
                href: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                type: "Href";
                href: string;
                label?: string | undefined;
            }, {
                id: string;
                type: "Href";
                href: string;
                label?: string | undefined;
            }>]>, "strip"> | undefined;
            interruptResumeValue?: {
                value: string;
                type: "SELECT_OPTION";
            } | {
                value: string;
                type: "INPUT_TEXT";
            } | undefined;
        } | undefined;
        id?: string | undefined;
        user?: {
            id?: string | undefined;
            name?: string | undefined;
        } | undefined;
        refusal?: string | undefined;
        reader?: z.objectInputType<{}, z.ZodUnknown, "strip"> | undefined;
        isError?: boolean | undefined;
        traceData?: {
            transactionId?: string | undefined;
            traceId?: string | undefined;
        } | undefined;
    }[];
}>;
