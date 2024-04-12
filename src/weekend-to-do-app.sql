 CREATE TABLE IF NOT EXISTS 
    "task"("taskid" SERIAL PRIMARY KEY,
          "taskName" TEXT,
          "isComplete" BOOLEAN DEFAULT FALSE);