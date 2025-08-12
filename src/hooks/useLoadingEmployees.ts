import {getEmployees} from '@services/employeeService';
import type {EmployerFormDataType} from '../types/EmployerFormDataType';
import {useEffect, useState} from 'react';

export default function useLoadingEmployees() {
     const [employees, setEmployees] = useState<EmployerFormDataType[]>([]);
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState<Error | null>(null);

     useEffect(() => {
          const fetchEmployees = async () => {
               try {
                    const data = await getEmployees();
                    setEmployees(data);
               } catch (err) {
                    setError(err as Error);
               } finally {
                    setLoading(false);
               }
          };
          fetchEmployees();
     }, []);

     return {employees, loading, error};
}
