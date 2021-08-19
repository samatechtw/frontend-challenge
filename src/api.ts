import { FetchApi, FetchApiOptions } from '@sampullman/vue3-fetch-api';
import { API_URL } from '/src/utils/config';

class Api extends FetchApi {

  constructor(options: FetchApiOptions) {
    super(options);
  }

  async getNft(id: number) {
    try {
      const config = {
        url: `nft/${id}`,
        method: 'GET',
      };
      const { data } = await this.request(config);
      return data;
    } catch(_e) {
      return null;
    }
  }

  async getNfts() {
    // TODO
  }
}

export const api = new Api({
  baseUrl: API_URL,
  responseInterceptors: [async res => {
    if(!res || res.status >= 500) {
      throw new Error('NETWORK_FAILURE');
    }
    let data: Object;
    try {
      data = await res.json();
    } catch(_e) {
      // Avoid crashing on empty response
      data = {};
    }

    if(res.status === 400) {
      throw data;
    }
    (res as any).data = data;
    return res;
  }],
});
