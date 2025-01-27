import { useState, useEffect, useCallback } from "react";

interface UseAsyncState<T> {
    data: T | null;
    error: string | null;
    loading: boolean;
}

interface UseAsyncOptions<T> {
    onSuccess?: (data: T) => void;
    onError?: (error: string) => void;
}

export const useAsync = <T>(
    asyncFunction: () => Promise<T>,
    dependencies: any[] = [],
    options: UseAsyncOptions<T> = {}
): UseAsyncState<T> => {
    const { onSuccess, onError } = options;

    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const execute = useCallback(async () => {
        setLoading(true);
        setError(null);

        try {
            setLoading(true);
            const result = await asyncFunction();
            setData(result);
            onSuccess?.(result); // Call onSuccess callback if provided 
        } catch (err) {
            const errorMessage = (err as Error).message || "An error occurred";
            setError(errorMessage);
            onError?.(errorMessage); // Call onError callback if provided
        } finally {
            setLoading(false);
        }
    }, dependencies); // Re-run the callback when dependencies change

    useEffect(() => {
        execute();
    }, [execute]);

    return { data, error, loading };
};
