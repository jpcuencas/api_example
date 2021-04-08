export class ResponseMessage {
    static Success(data?: any) {
        return {
            ok: true,
            data: data
        };
    }

    static Error(msn?: string) {
        return {
            ok: false,
            msn: msn
        };
    }
}

