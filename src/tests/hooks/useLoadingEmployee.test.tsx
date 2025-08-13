import {renderHook, waitFor} from '@testing-library/react'; // <- importei waitFor
import {describe, it, expect, vi} from 'vitest';
import useLoadingEmployees from '../../hooks/useLoadingEmployees';
import * as employeeService from '@services/employeeService';

const mockEmployees = [
     {
          titulo: 'Engenheiro',
          email: 'eng@example.com',
          departamento: 'TI',
          status: 'Ativo',
          avatar: '',
     },
];

describe('useLoadingEmployees', () => {
     it('deve carregar funcionários com sucesso', async () => {
          vi.spyOn(employeeService, 'getEmployees').mockResolvedValue(
               mockEmployees
          );

          const {result} = renderHook(() => useLoadingEmployees());

          expect(result.current.loading).toBe(true);
          expect(result.current.employees).toEqual([]);
          expect(result.current.error).toBeNull();

          // Espera até que loading fique false
          await waitFor(() => {
               expect(result.current.loading).toBe(false);
          });

          expect(result.current.employees).toEqual(mockEmployees);
          expect(result.current.error).toBeNull();
     });

     it('deve lidar com erro ao carregar funcionários', async () => {
          const errorMessage = 'Erro na API';
          vi.spyOn(employeeService, 'getEmployees').mockRejectedValue(
               new Error(errorMessage)
          );

          const {result} = renderHook(() => useLoadingEmployees());

          expect(result.current.loading).toBe(true);
          expect(result.current.employees).toEqual([]);
          expect(result.current.error).toBeNull();

          await waitFor(() => {
               expect(result.current.loading).toBe(false);
          });

          expect(result.current.employees).toEqual([]);
          expect(result.current.error).not.toBeNull();
          expect(result.current.error?.message).toBe(errorMessage);
     });
});
