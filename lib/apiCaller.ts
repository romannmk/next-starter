import fetch from 'isomorphic-unfetch'

interface IApiCaller {
  url: string
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
  body?: string
}

export const apiCaller = async ({ url, method = 'GET', body }: IApiCaller) => {
  try {
    const res = await fetch(url, {
      method,
      ...(body && { body: JSON.stringify(body) }),
    })

    const data = await res.json()

    return data
  } catch (e) {
    throw new Error(e)
  }
}
