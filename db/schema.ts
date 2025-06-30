import { pgTable,uuid,varchar,text} from "drizzle-orm/pg-core";

export const blogsTable = pgTable('blogs', {
    id: uuid('id').primaryKey().defaultRandom(),
    title:varchar({length: 255}).notNull(),
    body:text().notNull(),
    orgId:text().notNull(),
  
});

export type CreateBlogType = typeof blogsTable.$inferInsert;
export type SelectBlogType = typeof blogsTable.$inferSelect;

