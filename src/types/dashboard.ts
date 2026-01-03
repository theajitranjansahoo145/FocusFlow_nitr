export interface Session {
  id: string;
  type: "study" | "break" | "distraction";
  startTime: string;
  app: string;
  duration: number;
}

export interface DaySchedule {
  type: "peak" | "high" | "break" | string;
  time: string;
  activity: string;
  active: boolean;
  completed: boolean;
}
