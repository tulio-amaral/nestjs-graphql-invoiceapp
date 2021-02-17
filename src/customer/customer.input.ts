import { InputType, Field } from '@nestjs/graphql';

@InputType()
class CustomerInput {
  @Field()
  readonly name: string;
  readonly email: string;
  readonly phone: string;
  readonly address: string;
}

export default CustomerInput;
