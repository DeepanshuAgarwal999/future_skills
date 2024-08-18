export class FetchService {
  BACKEND_URL: string;

  public constructor() {
    this.BACKEND_URL =
      import.meta.env.VITE_BASE_URL || "http://localhost:4000/api/v2";
  }

  async get<T>(
    url: string
  ): Promise<{ status: number; response: Response; data?: T }> {
    try {
      const response = await fetch(this.BACKEND_URL + url, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      });

      const result = (await response.json()) as APIResponse<T>;
      return { status: response.status, response, data: result.data };
    } catch (error: any) {
      console.error("Error in GET request:", error);
      return {
        status: error.status || 500,
        response: error.response || null,
        data: undefined,
      };
    }
  }

  async post<T>(
    url: string,
    body: any
  ): Promise<{ status: number; response: Response; data?: T }> {
    try {
      const response = await fetch(this.BACKEND_URL + url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }

      const result = (await response.json()) as APIResponse<T>;
      return { status: response.status, response, data: result.data };
    } catch (error: any) {
      console.error("Error in POST request:", error);
      return {
        status: error.status || 500,
        response: error.response || null,
        data: undefined,
      };
    }
  }

  async download<T>(
    url: string
  ): Promise<{ status: number; response: Response }> {
    try {
      const response = await fetch(this.BACKEND_URL + url, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }

      return { status: response.status, response };
    } catch (error: any) {
      console.error("Error in DOWNLOAD request:", error);
      return { status: error.status || 500, response: error.response || null };
    }
  }
}

export const fetchService = new FetchService();
