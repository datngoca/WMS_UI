import isEqual from "lodash.isequal";
type FormValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | FormValue[]
  | { [key: string]: FormValue };

type PrimitiveObject = object;

const normalizeValue = (value: FormValue): FormValue => {
  if (typeof value === "string") {
    return value.trim();
  }

  if (Array.isArray(value)) {
    return value.map(normalizeValue);
  }

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, nestedValue]) => [
        key,
        normalizeValue(nestedValue as FormValue),
      ]),
    ) as FormValue;
  }

  return value;
};

export const normalizeFormValues = <T extends PrimitiveObject>(data: T): T => {
  return normalizeValue(data as FormValue) as T;
};

export const hasFormChanged = <T extends PrimitiveObject>(
  currentData: T,
  initialData: T,
): boolean => {
  return !isEqual(
    normalizeFormValues(currentData),
    normalizeFormValues(initialData),
  );
};

export const isFormEmpty = <T extends PrimitiveObject>(data: T): boolean => {
  return Object.values(normalizeFormValues(data)).some((value) => value === "");
};
