export interface WaitlistEntry {
  id: string;
  name: string;
  email: string;
  description?: string;
  timestamp: Date;
}

export interface WaitlistFormData {
  name: string;
  email: string;
  description?: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
  data?: any;
}
