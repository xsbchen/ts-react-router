import { ComponentType } from "react";

interface Route<TProps> {
    Component: ComponentType<TProps>;
}

interface RouterOptions<TRoutes> {
    routes: TRoutes;
}

type PageProps<T extends ComponentType<any>> = T extends ComponentType<infer P> ? P : never;

export default class Router<TRoutes extends Record<string, Route<any>>> {
    private options: RouterOptions<TRoutes>;

    constructor(options: RouterOptions<TRoutes>) {
        this.options = options;
    }

    public push<K extends Extract<keyof TRoutes, string>>(
        path: K,
        params: PageProps<TRoutes[K]['Component']>
    ) {
        const shouldString: string = path;

        // 具体实现省略
        console.log(shouldString, path, params);
    }
}