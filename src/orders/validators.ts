import { OrderStatus, PaymentMethod } from '@prisma/client';
import { ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';

const paymentMethod = new Set(['card', 'cash'] as const satisfies readonly PaymentMethod[]);

@ValidatorConstraint({ name: 'paymentMethod', async: false })
export class PaymentMethodValidator implements ValidatorConstraintInterface {
  validate(value: any) {
    return paymentMethod.has(value);
  }

  defaultMessage() {
    return `Payment method ($value) should be in (${[...paymentMethod].join(', ')})`;
  }
}

const orderStatus = new Set(['delivered', 'dispatched', 'processing'] as const satisfies readonly OrderStatus[]);

@ValidatorConstraint({ name: 'paymentMethod', async: false })
export class OrderStatusValidator implements ValidatorConstraintInterface {
  validate(value: any) {
    return orderStatus.has(value);
  }

  defaultMessage() {
    return `Order status ($value) should be in (${[...orderStatus].join(', ')})`;
  }
}
