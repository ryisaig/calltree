export type Action = {
    type: "api" | "popup" | "redirect",
    path: string,
    arguments?: Argument[],
    method?: "POST" | "GET" | "PATCH" | "PUT"
};

export type Argument = {
    id: string,
    type: "string" | "number" | "list" | "boolean",
};

export type Button = {
    id: string,
    icon?: string,
    iconOnly?: boolean,
    label: string,
    colorType: "primary" | "secondary" | "warning" | "danger" | "light" | "medium",
    onClick: Action,
};

export type DataColumn = {
    id: string,
    title: string,
    position: "left" | "right" | "center",
    type: "string" | "graph"
};

export type DataTableConfig = {
    columns: DataColumn[],
    isEnumerated: boolean,
    isRowExpandable: boolean,
    actions: Array<Action>,
    data?: Array<any>,
    emptyMessage: string,
    sortables?: Array<string>,
    filters?: Array<FilterConfig>,
    currentPage: number,
    totalPages: number,
    labelMapping: any
};

export type StringPlaceholder = {
    pattern: string,
    arguments: Array<string>,
}

export type FilterConfig = {
    label: string,
    options: Array<string>
}

export type SummaryConfig = {
    title: string,
    icon: string,
    value: string
}
