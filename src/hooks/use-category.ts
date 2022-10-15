import axios from 'axios';
import { useEffect, useState } from 'react';
import { Category } from '../models/category';

const api = axios.create({
  baseURL: 'http://localhost:8080/api',
});

export function useGetAllCategorys(id = null) {
  const [categorys, setCategorys] = useState<Category[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    api
      .get('category/list')
      .then((response) => {
        setCategorys(response.data);
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  return { categorys, error };
}
