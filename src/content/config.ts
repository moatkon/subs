import { defineCollection, z } from 'astro:content';

const subscriptionsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    service: z.string(),
    price: z.number(),
    currency: z.string().default('CNY'),
    billingCycle: z.enum(['monthly', 'yearly', 'quarterly', 'weekly']),
    nextBillingDate: z.date(),
    category: z.string().optional(),
    description: z.string().optional(),
    website: z.string().url().optional(),
    isActive: z.boolean().default(true),
    tags: z.array(z.string()).optional(),
    notes: z.string().optional(),
  }),
});

export const collections = {
  subscriptions: subscriptionsCollection,
};
