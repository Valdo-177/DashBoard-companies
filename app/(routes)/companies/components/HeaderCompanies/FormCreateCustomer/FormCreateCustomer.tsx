"use client"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FormCreateCustomerProps } from "./FormCreateCustomer.types"
import { useState } from "react"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"

const formSchema = z.object({
    name: z.string(),
    country: z.string().min(2),
    website: z.string().min(2),
    phone: z.string().min(6),
    cif: z.string().min(6),
    profileImage: z.string()
})


export const FormCreateCustomer = ({ setOpenModalCreate }: FormCreateCustomerProps) => {
    const [photoUploaded, setPhotoUploaded] = useState(false)
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            country: '',
            website: '',
            phone: '',
            cif: '',
            profileImage: ''
        },
    })

    const { isValid } = form.formState

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log(values)
    }
    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div className="grid grid-cols-2 gap-3">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Company name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Company name..." type='text' {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        This is your public display name.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="country"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Country</FormLabel>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger className="w-[280px]">
                                                <SelectValue placeholder="Select a timezone" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>North America</SelectLabel>
                                                <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                                                <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
                                                <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
                                                <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
                                                <SelectItem value="akst">Alaska Standard Time (AKST)</SelectItem>
                                                <SelectItem value="hst">Hawaii Standard Time (HST)</SelectItem>
                                            </SelectGroup>
                                            <SelectGroup>
                                                <SelectLabel>Europe & Africa</SelectLabel>
                                                <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
                                                <SelectItem value="cet">Central European Time (CET)</SelectItem>
                                                <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
                                                <SelectItem value="west">
                                                    Western European Summer Time (WEST)
                                                </SelectItem>
                                                <SelectItem value="cat">Central Africa Time (CAT)</SelectItem>
                                                <SelectItem value="eat">East Africa Time (EAT)</SelectItem>
                                            </SelectGroup>
                                            <SelectGroup>
                                                <SelectLabel>Asia</SelectLabel>
                                                <SelectItem value="msk">Moscow Time (MSK)</SelectItem>
                                                <SelectItem value="ist">India Standard Time (IST)</SelectItem>
                                                <SelectItem value="cst_china">China Standard Time (CST)</SelectItem>
                                                <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
                                                <SelectItem value="kst">Korea Standard Time (KST)</SelectItem>
                                                <SelectItem value="ist_indonesia">
                                                    Indonesia Central Standard Time (WITA)
                                                </SelectItem>
                                            </SelectGroup>
                                            <SelectGroup>
                                                <SelectLabel>Australia & Pacific</SelectLabel>
                                                <SelectItem value="awst">
                                                    Australian Western Standard Time (AWST)
                                                </SelectItem>
                                                <SelectItem value="acst">
                                                    Australian Central Standard Time (ACST)
                                                </SelectItem>
                                                <SelectItem value="aest">
                                                    Australian Eastern Standard Time (AEST)
                                                </SelectItem>
                                                <SelectItem value="nzst">New Zealand Standard Time (NZST)</SelectItem>
                                                <SelectItem value="fjt">Fiji Time (FJT)</SelectItem>
                                            </SelectGroup>
                                            <SelectGroup>
                                                <SelectLabel>South America</SelectLabel>
                                                <SelectItem value="art">Argentina Time (ART)</SelectItem>
                                                <SelectItem value="bot">Bolivia Time (BOT)</SelectItem>
                                                <SelectItem value="brt">Brasilia Time (BRT)</SelectItem>
                                                <SelectItem value="clt">Chile Standard Time (CLT)</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                    <FormDescription>
                                        This is your public display name.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                         <FormField
                            control={form.control}
                            name="website"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Website</FormLabel>
                                    <FormControl>
                                        <Input placeholder="wwww.sscdsd.." type='text' {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        This is your public display name.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                         <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Phone</FormLabel>
                                    <FormControl>
                                        <Input placeholder="+57 3005654.." type='number' {...field} maxLength={10}/>
                                    </FormControl>
                                    <FormDescription>
                                        This is your public display number.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                         <FormField
                            control={form.control}
                            name="cif"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>CIF</FormLabel>
                                    <FormControl>
                                        <Input placeholder="B-26436" type='text' {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        This is your public display name.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                         <FormField
                            control={form.control}
                            name="profileImage"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Profile Image</FormLabel>
                                    <FormControl>
                                        <Input placeholder="+57 3005654.." type='number' {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        This is your public display name.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </div>
    )
}