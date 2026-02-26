"use client"

import React, { useState } from 'react'
import { upcomingEvents } from '@/data/events'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import { toast } from 'sonner'

const exhibitorLink = 'https://paystack.shop/gssicf-exhibitors'
const sponsorLink = 'https://paystack.shop/gssicf-sponsors'
const partnerLink = 'https://paystack.shop/gssicf-partners'
const delegateLink = 'https://paystack.shop/delegate---official'

export default function RegisterPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        eventId: '',
        membershipLevel: 'delegate'
    })

    const [paymentLink, setPaymentLink] = useState('')

    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSelectChange = (name: string, value: string) => {
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!formData.name || !formData.email || !formData.phone || !formData.eventId || !formData.membershipLevel) {
            toast.error('Please fill in all fields')
            return
        }

        const paymentLink = formData.membershipLevel === 'exhibitor' ? exhibitorLink : formData.membershipLevel === 'sponsor' ? sponsorLink : formData.membershipLevel === 'partner' ? partnerLink : delegateLink;
        setPaymentLink(paymentLink)
        console.log('Registration submitted:', formData)
        setIsSubmitted(true)
    }

    if (isSubmitted) {
        return (
            <div className="min-h-[80vh] flex flex-col items-center justify-center bg-background px-4 py-20">
                <Card className="max-w-md w-full text-center border-border shadow-lg">
                    <CardHeader>
                        <div className="flex justify-center mb-4">
                            <CheckCircle2 className="h-16 w-16 text-green-500" />
                        </div>
                        <CardTitle className="text-3xl text-foreground">Registration Successful!</CardTitle>
                        <CardDescription className="text-lg mt-2">
                            Thank you for registering, {formData.name}.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Button onClick={() => window.open(paymentLink, '_blank')} className="w-full mt-4 bg-primary text-primary-foreground hover:opacity-90">
                            Proceed to Payment
                        </Button>
                    </CardContent>
                </Card>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-secondary py-16 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
                        Event Registration
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        Complete the form below to secure your spot at our upcoming events.
                    </p>
                </div>

                <Card className="border-border shadow-lg">
                    <CardHeader>
                        <CardTitle>Attendee Information</CardTitle>
                        <CardDescription>All fields are required unless marked optional.</CardDescription>
                    </CardHeader>

                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">

                            {/* Personal Details */}
                            <div className="space-y-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="name">Full Name</Label>
                                    <Input
                                        id="name"
                                        name="name"
                                        placeholder=""
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="email">Email Address</Label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder=""
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="phone">Phone Number</Label>
                                        <Input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            placeholder=""
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Event Selection */}
                            <div className="grid gap-2">
                                <Label htmlFor="event">Select Event</Label>
                                <Select
                                    value={formData.eventId}
                                    onValueChange={(value) => handleSelectChange('eventId', value)}
                                    required
                                >
                                    <SelectTrigger className="w-full bg-background">
                                        <SelectValue placeholder="Choose an upcoming event" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {upcomingEvents.map((event) => (
                                            <SelectItem key={event.id} value={event.id.toString()}>
                                                {event.title} - {event.date}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* Membership Level */}
                            <div className="grid gap-3 pt-4 border-t border-border">
                                <Label className="text-base font-semibold">Membership Level</Label>
                                <RadioGroup
                                    defaultValue="delegate"
                                    value={formData.membershipLevel}
                                    onValueChange={(value) => handleSelectChange('membershipLevel', value)}
                                    className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                                >
                                    <div>
                                        <RadioGroupItem value="delegate" id="delegate" className="peer sr-only" />
                                        <Label
                                            htmlFor="delegate"
                                            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-black hover:text-white peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                                        >
                                            <span className="font-semibold text-lg">Delegate</span>
                                            <span className="text-sm text-muted-foreground text-center mt-1">Standard event access</span>
                                        </Label>
                                    </div>

                                    <div>
                                        <RadioGroupItem value="exhibitor" id="exhibitor" className="peer sr-only" />
                                        <Label
                                            htmlFor="exhibitor"
                                            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-black hover:text-white peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                                        >
                                            <span className="font-semibold text-lg">Exhibitor</span>
                                            <span className="text-sm text-muted-foreground text-center mt-1">Booth & promotions access</span>
                                        </Label>
                                    </div>

                                    <div>
                                        <RadioGroupItem value="sponsor" id="sponsor" className="peer sr-only" />
                                        <Label
                                            htmlFor="sponsor"
                                            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-black hover:text-white peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                                        >
                                            <span className="font-semibold text-lg">Sponsor</span>
                                            <span className="text-sm text-muted-foreground text-center mt-1">Premium branding & access</span>
                                        </Label>
                                    </div>

                                    <div>
                                        <RadioGroupItem value="partner" id="partner" className="peer sr-only" />
                                        <Label
                                            htmlFor="partner"
                                            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-black hover:text-white peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                                        >
                                            <span className="font-semibold text-lg">Partner</span>
                                            <span className="text-sm text-muted-foreground text-center mt-1">Strategic collaborative access</span>
                                        </Label>
                                    </div>
                                </RadioGroup>
                            </div>

                            <div className="pt-6">
                                <Button type="submit" className="w-full text-lg py-6 bg-primary hover:opacity-90 cursor-pointer">
                                    Complete Registration
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}