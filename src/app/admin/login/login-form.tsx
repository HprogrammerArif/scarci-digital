"use client";

import { loginAction } from "@/app/admin/actions";
import {
  ActionForm,
  SubmitButton,
  fieldClass,
  labelClass,
} from "@/components/admin/form-controls";

export function LoginForm({ next }: { next: string }) {
  return (
    <ActionForm action={loginAction} className="space-y-4">
      <input type="hidden" name="next" value={next} />
      <div>
        <label htmlFor="password" className={labelClass}>
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          autoFocus
          autoComplete="current-password"
          className={fieldClass}
        />
      </div>
      <SubmitButton className="w-full">Sign in</SubmitButton>
    </ActionForm>
  );
}
