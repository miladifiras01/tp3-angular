import { Pipe, PipeTransform } from '@angular/core';

export const fibonnaci = (n: number): number => {
  if (n == 1 || n == 0) {
    return 1;
  }
  return fibonnaci(n - 1) + fibonnaci(n - 2);
};

@Pipe({
  name: 'fibo',
})
export class FiboPipe implements PipeTransform {
  transform(value: number): number {
    return fibonnaci(value);
  }
}
