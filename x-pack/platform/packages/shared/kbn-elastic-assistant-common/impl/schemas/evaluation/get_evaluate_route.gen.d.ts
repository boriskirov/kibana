import { z } from '@kbn/zod';
export type GetEvaluateResponse = z.infer<typeof GetEvaluateResponse>;
export declare const GetEvaluateResponse: z.ZodObject<{
    datasets: z.ZodArray<z.ZodString, "many">;
    graphs: z.ZodArray<z.ZodString, "many">;
    results: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        status: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        status: string;
    }, {
        id: string;
        status: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    results: {
        id: string;
        status: string;
    }[];
    graphs: string[];
    datasets: string[];
}, {
    results: {
        id: string;
        status: string;
    }[];
    graphs: string[];
    datasets: string[];
}>;
