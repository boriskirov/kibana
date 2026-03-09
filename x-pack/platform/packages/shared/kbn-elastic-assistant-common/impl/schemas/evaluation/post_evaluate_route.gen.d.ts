import { z } from '@kbn/zod';
export type PostEvaluateBody = z.infer<typeof PostEvaluateBody>;
export declare const PostEvaluateBody: z.ZodObject<{
    graphs: z.ZodArray<z.ZodString, "many">;
    datasetName: z.ZodString;
    evaluatorConnectorId: z.ZodOptional<z.ZodString>;
    connectorIds: z.ZodArray<z.ZodString, "many">;
    runName: z.ZodOptional<z.ZodString>;
    alertsIndexPattern: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    langSmithApiKey: z.ZodOptional<z.ZodString>;
    langSmithProject: z.ZodOptional<z.ZodString>;
    replacements: z.ZodDefault<z.ZodOptional<z.ZodObject<{}, "strip", z.ZodString, z.objectOutputType<{}, z.ZodString, "strip">, z.objectInputType<{}, z.ZodString, "strip">>>>;
    screenContext: z.ZodOptional<z.ZodObject<{
        timeZone: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        timeZone?: string | undefined;
    }, {
        timeZone?: string | undefined;
    }>>;
    size: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    size: number;
    replacements: {} & {
        [k: string]: string;
    };
    alertsIndexPattern: string;
    graphs: string[];
    datasetName: string;
    connectorIds: string[];
    langSmithProject?: string | undefined;
    langSmithApiKey?: string | undefined;
    evaluatorConnectorId?: string | undefined;
    runName?: string | undefined;
    screenContext?: {
        timeZone?: string | undefined;
    } | undefined;
}, {
    graphs: string[];
    datasetName: string;
    connectorIds: string[];
    size?: number | undefined;
    replacements?: z.objectInputType<{}, z.ZodString, "strip"> | undefined;
    alertsIndexPattern?: string | undefined;
    langSmithProject?: string | undefined;
    langSmithApiKey?: string | undefined;
    evaluatorConnectorId?: string | undefined;
    runName?: string | undefined;
    screenContext?: {
        timeZone?: string | undefined;
    } | undefined;
}>;
export type PostEvaluateRequestBody = z.infer<typeof PostEvaluateRequestBody>;
export declare const PostEvaluateRequestBody: z.ZodObject<{
    graphs: z.ZodArray<z.ZodString, "many">;
    datasetName: z.ZodString;
    evaluatorConnectorId: z.ZodOptional<z.ZodString>;
    connectorIds: z.ZodArray<z.ZodString, "many">;
    runName: z.ZodOptional<z.ZodString>;
    alertsIndexPattern: z.ZodDefault<z.ZodOptional<z.ZodString>>;
    langSmithApiKey: z.ZodOptional<z.ZodString>;
    langSmithProject: z.ZodOptional<z.ZodString>;
    replacements: z.ZodDefault<z.ZodOptional<z.ZodObject<{}, "strip", z.ZodString, z.objectOutputType<{}, z.ZodString, "strip">, z.objectInputType<{}, z.ZodString, "strip">>>>;
    screenContext: z.ZodOptional<z.ZodObject<{
        timeZone: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        timeZone?: string | undefined;
    }, {
        timeZone?: string | undefined;
    }>>;
    size: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    size: number;
    replacements: {} & {
        [k: string]: string;
    };
    alertsIndexPattern: string;
    graphs: string[];
    datasetName: string;
    connectorIds: string[];
    langSmithProject?: string | undefined;
    langSmithApiKey?: string | undefined;
    evaluatorConnectorId?: string | undefined;
    runName?: string | undefined;
    screenContext?: {
        timeZone?: string | undefined;
    } | undefined;
}, {
    graphs: string[];
    datasetName: string;
    connectorIds: string[];
    size?: number | undefined;
    replacements?: z.objectInputType<{}, z.ZodString, "strip"> | undefined;
    alertsIndexPattern?: string | undefined;
    langSmithProject?: string | undefined;
    langSmithApiKey?: string | undefined;
    evaluatorConnectorId?: string | undefined;
    runName?: string | undefined;
    screenContext?: {
        timeZone?: string | undefined;
    } | undefined;
}>;
export type PostEvaluateRequestBodyInput = z.input<typeof PostEvaluateRequestBody>;
export type PostEvaluateResponse = z.infer<typeof PostEvaluateResponse>;
export declare const PostEvaluateResponse: z.ZodObject<{
    evaluationId: z.ZodString;
    success: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    success: boolean;
    evaluationId: string;
}, {
    success: boolean;
    evaluationId: string;
}>;
