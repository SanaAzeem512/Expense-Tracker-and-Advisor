import {
  integer,
  numeric,
  pgTable,
  serial,
  varchar,
  timestamp,  // Import timestamp for date type
} from "drizzle-orm/pg-core";

export const Budgets = pgTable("budgets", {
  id: serial("id").primaryKey(),
  name: varchar("name").notNull(),
  amount: numeric("amount").notNull(),  // Corrected to numeric
  icon: varchar("icon"),
  createdBy: varchar("createdBy").notNull(),
});

export const Incomes = pgTable("incomes", {
  id: serial("id").primaryKey(),
  name: varchar("name").notNull(),
  amount: numeric("amount").notNull(),  // Corrected to numeric
  icon: varchar("icon"),
  createdBy: varchar("createdBy").notNull(),
});

export const Expenses = pgTable("expenses", {
  id: serial("id").primaryKey(),
  name: varchar("name").notNull(),
  amount: numeric("amount").notNull().default(0),  // Corrected to numeric
  budgetId: integer("budgetId").references(() => Budgets.id),
  createdAt: timestamp("createdAt").notNull(),  // Changed to timestamp
});

