'use client';

import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import PlusIcon from '@/images/PlusIcon';

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
    <AccordionPrimitive.Item
        ref={ref}
        className={cn('border-b', className)}
        {...props}
    />
));
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & {
        isOpen?: boolean;
    }
>(({ className, children, isOpen, ...props }, ref) => (
    <AccordionPrimitive.Header className='flex'>
        <AccordionPrimitive.Trigger
            ref={ref}
            className={cn(
                'flex flex-1 items-center text-start justify-between py-4 text-neutral-400 font-semibold transition-all hover:text-blue-700',
                className
            )}
            {...props}
        >
            {children}
            <PlusIcon isOpen={isOpen} />
        </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Content
        ref={ref}
        className='overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down'
        {...props}
    >
        <div className={cn('pb-4 pt-0 text-neutral-400 leading-7', className)}>
            {children}
        </div>
    </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
