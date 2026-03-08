import { pgTable, serial, varchar, text, integer, timestamp, boolean, json } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

// Users table
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  name: varchar("name", { length: 255 }),
  grade: integer("grade").default(6),
  createdAt: timestamp("created_at").defaultNow(),
});

// Questions table
export const questions = pgTable("questions", {
  id: serial("id").primaryKey(),
  topicId: varchar("topic_id", { length: 50 }).notNull(),
  domainCode: varchar("domain_code", { length: 20 }).notNull(),
  difficulty: varchar("difficulty", { length: 20 }).notNull(), // easy, medium, hard
  questionText: text("question_text").notNull(),
  options: json("options").$type<string[]>().notNull(),
  correctAnswer: varchar("correct_answer", { length: 10 }).notNull(),
  explanation: text("explanation"),
  hint: text("hint"),
  source: varchar("source", { length: 100 }),
  createdAt: timestamp("created_at").defaultNow(),
});

// User progress table
export const userProgress = pgTable("user_progress", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id).notNull(),
  questionId: integer("question_id").references(() => questions.id).notNull(),
  answeredCorrectly: boolean("answered_correctly").notNull(),
  answerGiven: varchar("answer_given", { length: 10 }),
  timeSpentSeconds: integer("time_spent_seconds"),
  attemptedAt: timestamp("attempted_at").defaultNow(),
});

// User topic progress stats
export const userTopicStats = pgTable("user_topic_stats", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id).notNull(),
  topicId: varchar("topic_id", { length: 50 }).notNull(),
  totalAnswered: integer("total_answered").default(0),
  correctAnswers: integer("correct_answers").default(0),
  streak: integer("streak").default(0),
  lastAttemptedAt: timestamp("last_attempted_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Quiz sessions
export const quizSessions = pgTable("quiz_sessions", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").references(() => users.id).notNull(),
  topicIds: json("topic_ids").$type<string[]>().notNull(),
  difficulty: varchar("difficulty", { length: 20 }),
  status: varchar("status", { length: 20 }).default("active"), // active, completed, abandoned
  startedAt: timestamp("started_at").defaultNow(),
  completedAt: timestamp("completed_at"),
  score: integer("score"),
  totalQuestions: integer("total_questions"),
});

// Relations
export const usersRelations = relations(users, ({ many }) => ({
  progress: many(userProgress),
  topicStats: many(userTopicStats),
  quizSessions: many(quizSessions),
}));

export const questionsRelations = relations(questions, ({ many }) => ({
  progress: many(userProgress),
}));

export const userProgressRelations = relations(userProgress, ({ one }) => ({
  user: one(users, {
    fields: [userProgress.userId],
    references: [users.id],
  }),
  question: one(questions, {
    fields: [userProgress.questionId],
    references: [questions.id],
  }),
}));
