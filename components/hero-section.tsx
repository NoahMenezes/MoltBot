'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { TextEffect } from '@/components/ui/text-effect'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { HeroHeader } from './header'
import { AnimatePresence, motion } from 'motion/react'
import { TextAnimate } from "@/components/ui/text-animate"
import LogoCloud from './logo-cloud'



const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring' as const,
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
} as const

export default function HeroSection() {
    const [botName, setBotName] = useState("Moltbot")

    useEffect(() => {
        const bots = ["Moltbot", "OpenClaw", "Clawdbot"]
        let index = 0
        const interval = setInterval(() => {
            index = (index + 1) % bots.length
            setBotName(bots[index])
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    return (
        <>
            <HeroHeader />
            <main className="overflow-hidden">
                <div
                    aria-hidden
                    className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block">
                    <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
                    <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                    <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
                </div>
                <section>
                    <div className="relative pt-24 md:pt-36">
                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            delayChildren: 1,
                                        },
                                    },
                                },
                                item: {
                                    hidden: {
                                        opacity: 0,
                                        y: 20,
                                    },
                                    visible: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            type: 'spring',
                                            bounce: 0.3,
                                            duration: 2,
                                        },
                                    },
                                },
                            }}
                            className="mask-b-from-35% mask-b-to-90% absolute inset-0 top-56 -z-20 lg:top-32">
                            <Image
                                src="https://ik.imagekit.io/lrigu76hy/tailark/night-background.jpg?updatedAt=1745733451120"
                                alt="background"
                                className="hidden size-full dark:block"
                                width="3276"
                                height="4095"
                            />
                        </AnimatedGroup>

                        <div
                            aria-hidden
                            className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"
                        />

                        <div className="mx-auto max-w-7xl px-6 relative">
                            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                                <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start lg:mt-0">
                                    <AnimatedGroup variants={transitionVariants}>
                                        <Link
                                            href="#booking"
                                            className="hover:bg-background dark:hover:border-t-border bg-muted group flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950">
                                            <span className="text-foreground text-sm">Next-Gen Agent Infrastructure</span>
                                            <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>

                                            <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                                                <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                                                    <span className="flex size-6">
                                                        <ArrowRight className="m-auto size-3" />
                                                    </span>
                                                    <span className="flex size-6">
                                                        <ArrowRight className="m-auto size-3" />
                                                    </span>
                                                </div>
                                            </div>
                                        </Link>
                                    </AnimatedGroup>

                                    <h1 className="mt-8 max-w-4xl text-balance text-5xl font-bold tracking-tight md:text-7xl lg:mt-12 xl:text-[5rem]">
                                        <TextAnimate as="span" by="word">
                                            Get a Virtual Employee with
                                        </TextAnimate>
                                        <span className="block text-primary h-[1.26em] overflow-hidden -mt-2">
                                            <AnimatePresence mode="wait">
                                                <motion.span
                                                    key={botName}
                                                    initial={{ y: 20, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    exit={{ y: -20, opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="block"
                                                >
                                                    {botName}
                                                </motion.span>
                                            </AnimatePresence>
                                        </span>
                                    </h1>

                                    <div className="mt-8 flex flex-col gap-2">
                                        <p className="text-xl font-medium text-foreground">
                                            We host it. We connect it. We keep it running.
                                        </p>
                                        <TextEffect
                                            per="line"
                                            preset="fade-in-blur"
                                            speedSegment={0.3}
                                            delay={0.5}
                                            as="p"
                                            className="max-w-2xl text-balance text-lg text-muted-foreground">
                                            OpenClaw as a virtual employee, VM hosted, channels connected, top skills enabled, monitored, no lock-in, Bring your own AI keys.
                                        </TextEffect>
                                    </div>

                                    <AnimatedGroup
                                        variants={{
                                            container: {
                                                visible: {
                                                    transition: {
                                                        staggerChildren: 0.05,
                                                        delayChildren: 0.75,
                                                    },
                                                },
                                            },
                                            ...transitionVariants,
                                        }}
                                        className="mt-12 flex flex-col items-center lg:items-start gap-4">
                                        <div
                                            key={1}
                                            className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5">
                                            <Button
                                                asChild
                                                size="lg"
                                                className="rounded-xl px-8 text-base shadow-lg shadow-primary/25">
                                                <Link href="#booking">
                                                    <span className="text-nowrap font-semibold">Book a Call</span>
                                                    <ArrowRight className="ml-2 size-4" />
                                                </Link>
                                            </Button>
                                        </div>
                                        <span className="text-sm text-balance text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-1000 fill-mode-both text-center lg:text-left">
                                            Tell us what you want it to do. We’ll recommend a setup and share a quote.
                                        </span>
                                    </AnimatedGroup>
                                </div>

                                <div className="flex-1 flex justify-center lg:justify-end animate-in fade-in slide-in-from-right-8 duration-1000 delay-500 fill-mode-both">
                                    <div className="relative size-72 md:size-96 lg:size-[35rem] overflow-hidden">
                                        <video
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            className="size-full object-cover scale-[1.35]"
                                        >
                                            <source src="/moltbotvideo.mp4" type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                <LogoCloud />
            </main>
        </>
    )
}
