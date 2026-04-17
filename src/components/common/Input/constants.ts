export const INPUT_TYPES = {
    SELECT: 'SELECT',
    MULTI_SELECT: 'MULTI_SELECT',
    TREE_SELECT: "TREE_SELECT",
    MULTI_TREE_SELECT: "MULTI_TREE_SELECT"
}


export const DEFAULT_FIELD_NAMES = {
    LABEL: 'label',
    VALUE: 'id',
    CHILDREN: 'children'
}

export const CHECK_STATES = {
    UNCHECKED: 0,
    CHECKED: 1,
    INDETERMINATE: 2, // Trạng thái node cha có con được chọn nhưng không phải tất cả
};

export const TREE_CONFIG = {
    INDENT_SIZE: 20,
    MAX_HEIGHT: 300,
    PLACEHOLDER: 'Please choose ....',
    NO_DATA_TEXT: 'No Data'
}