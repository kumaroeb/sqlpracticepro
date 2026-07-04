// Department roster — v1 per the locked product spec. Finance and Customer
// Support are named as future departments but intentionally not built yet.

export type Department = {
  id: string
  name: string
  manager: string
}

export const departments: Department[] = [
  { id: 'product-analytics', name: 'Product Analytics', manager: 'Sophia Carter' },
  { id: 'marketing-analytics', name: 'Marketing Analytics', manager: 'Michael Chen' },
  { id: 'content-analytics', name: 'Content Analytics', manager: 'Emma Brooks' },
]