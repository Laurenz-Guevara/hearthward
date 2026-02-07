"use client"

import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { MaxWidthWrapper } from "@/components/max-width-wrapper"
import { Controller, useFieldArray, useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { IconPlus, IconX } from "@tabler/icons-react"

const formSchema = z.object({
  householdName: z
    .string()
    .min(2, "Household name must be at least 2 characters.")
    .max(32, "Household name can't exceed 32 characters."),
  additionalHouseholdMembers: z.array(
    z.object({
      email: z.email("Please enter a valid email address.")
        .optional()
        .or(z.literal("")),
    })
  ),
  address: z.string().optional(),
})

export function CreateAHouseholdForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      householdName: "",
      additionalHouseholdMembers: [{ email: "" }],
      address: "",
    },
  })

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "additionalHouseholdMembers",
  })

  function handleRemoveOptionalForm(index: number) {
    if (index === 0) {
      form.setValue(`additionalHouseholdMembers.${index}.email`, "")
    } else {
      remove(index)
    }
  }

  function onSubmit(householdForm: z.infer<typeof formSchema>) {
    const prunedFields = {
      ...householdForm,
      additionalHouseholdMembers: householdForm.additionalHouseholdMembers.filter(
        (m) => m.email?.trim() !== ""
      ),
    }

    //TODO: Backend logic for submit -> Validate on server, on error update incorrect form with reason
    console.log(prunedFields)
  }

  const handleMemberChange = (index: number, value: string) => {
    form.setValue(`additionalHouseholdMembers.${index}.email`, value)
  }

  return (
    <section className="min-h-screen">
      <MaxWidthWrapper>
        <form id="household-form" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="householdName"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="household-name">
                    Household Name
                  </FieldLabel>
                  <FieldDescription>
                    Give your household a name. This will be private to anyone not in this household.
                  </FieldDescription>
                  <Input
                    {...field}
                    id="household-name"
                    className="overflow-ellipsis"
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter the name of your household"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="address"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="address">
                    Household Address<span className="text-muted-foreground">(optional)</span>
                  </FieldLabel>
                  <FieldDescription>
                    Enter the address for your household or a local area. This will be private to anyone not in this household. It will be used to give you a rough approximation of how far someone is from you if your pet&apos;s tag has been scanned.
                  </FieldDescription>
                  <Input
                    {...field}
                    id="address"
                    className="overflow-ellipsis"
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter the address of your household"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Field>
              <FieldLabel>
                Invite members to your household<span className="text-muted-foreground">(optional)</span>
              </FieldLabel>
              <FieldDescription>
                To give other people access to your household enter their email below. They will recieve a link to sign up and will be automatically added to your household. Don&apos;t worry only you will be able to make changes to the household or pets.
              </FieldDescription>
              <div className="space-y-2">
                {fields.map((item, index) => (
                  <Controller
                    key={item.id}
                    name={`additionalHouseholdMembers.${index}.email`}
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <div className="flex gap-2 items-start">
                        <Field
                          data-invalid={fieldState.invalid}
                          className="flex-1"
                        >
                          <Input
                            {...field}
                            className="overflow-ellipsis"
                            placeholder="example@email.com"
                            autoComplete="off"
                            autoFocus={false}
                            onChange={(e) => {
                              field.onChange(e)
                              handleMemberChange(index, e.target.value)
                            }}
                          />
                          {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                          )}
                        </Field>
                        <Button
                          size="icon"
                          variant="outline"
                          type="button"
                          onClick={() => handleRemoveOptionalForm(index)}
                        >
                          <IconX className="h-4 w-4" />
                        </Button>
                      </div>
                    )}
                  />
                ))}
                <div className="flex justify-end items-center space-x-2 mt-2">
                  <Button className="pr-2.5" variant="outline" type="button" onClick={() => append({ email: "" })}>
                    <span className="text-sm text-muted-foreground">Add another</span>
                    <IconPlus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Field>

          </FieldGroup>
        </form>
        <div className="pt-2">
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            Reset
          </Button>
          <Button type="submit" form="household-form">
            Submit
          </Button>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

