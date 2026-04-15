import * as React from "react";
import { FormProvider, Controller } from "react-hook-form";

type AnyProps = any;

export function Form<T>({ children, ...methods }: AnyProps) {
	return <FormProvider {...methods}>{children}</FormProvider>;
}

export function FormField({ control, name, render }: AnyProps) {
	return (
		<Controller
			control={control}
			name={name}
			render={render}
		/>
	);
}

export const FormItem = ({ children, ...props }: AnyProps) => (
	<div {...props}>{children}</div>
);

export const FormLabel = ({ children, ...props }: AnyProps) => (
	<label
		{...props}
		className="block text-sm font-medium"
	>
		{children}
	</label>
);

export const FormControl = ({ children, ...props }: AnyProps) => (
	<div {...props}>{children}</div>
);

export const FormMessage = ({ children, ...props }: AnyProps) => (
	<p
		{...props}
		className="text-sm text-destructive mt-1"
	>
		{children}
	</p>
);

export default Form;
