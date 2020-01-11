import request, { Response } from 'request';

export function test(uri: string, done: (data: unknown) => void): void {
	request(
		{
			uri,
		},
		(error: unknown, res: Response, data: unknown): void => {
			if (error !== null) {
				console.error(error);
				return;
			}
			done(data);
		}
	);
}
