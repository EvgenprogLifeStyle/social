export function getQueryParams(params:OptionRecord<string, string>) {
    const searchParams = new URLSearchParams(window.location.search);
    Object.entries(params).forEach(([name, value]) => {
        if (value !== undefined) searchParams.set(name, value);
    });
    return `?${searchParams}`;
}

/**
 * Функция добавления параметров строки запросов в URl
 * @param params
 */
export function addQueryParams(params:OptionRecord<string, string>) {
    window.history.pushState(null, '', getQueryParams(params));
}
