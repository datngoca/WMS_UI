// utils/productTransform.ts (Hoặc đặt cuối file component)

import type { Product, ProductRequest } from "../types/product.interface";

// Hàm đảm bảo product luôn có đủ các mảng mặc định để Form không bị crash
export const getInitialFormState = (product?: Product): Product => {
    return {
        id: product?.id || 0,
        name: product?.name || "",
        sku: product?.sku || "",
        description: product?.description || "",
        basePrice: product?.basePrice || 0,
        originalPrice: product?.originalPrice || 0,
        categories: product?.categories || [],
        productUnits: product?.productUnits || [{
            unit: null,
            exchangeValue: 1,
            price: 0,
            isBaseUnit: true,
        }],
        specs: product?.specs || [
            {
                label: "",
                value: "",
            }
        ],
        detailedSpecs: product?.detailedSpecs || [
            {
                groupName: "",
                items: [
                    {
                        label: "",
                        value: "",
                    }
                ],
            }
        ],
        options: product?.options || [
            {
                name: "",
                type: "",
                values: [
                    {
                        label: "",
                        value: "",
                    }
                ],
            }
        ],
    }
};

// Hàm transform dữ liệu từ Form sang Request DTO
export const transformToRequest = (data: Product): ProductRequest => ({
    ...data,
    productUnits: data.productUnits
        .filter((item) => item.unit != null)
        .map((item) => ({
            unitId: item.unit!.id,
            exchangeValue: Number(item.exchangeValue),
            price: Number(item.price),
            isBaseUnit: item.isBaseUnit,
        })),
});