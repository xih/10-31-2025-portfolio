"use client";

import { useState } from "react";
import Link from "next/link";
import projects from "./projects.json";
import { motion } from "framer-motion";
import Image from "next/image";

interface Project {
  id: string;
  title: string;
  date: string;
  image?: string;
  description: string;
  tags: string[];
  link: string;
  quote?: string;
  featured?: boolean;
  video?: string;
}

function ProjectCard({ project }: { project: Project }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={project.link}>
      <div
        className="group relative aspect-[1.6/1] overflow-hidden rounded-2xl bg-neutral-900 transition-all duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background Image/Content */}
        <div className="absolute inset-0 h-full w-full">
          {project.video ? (
            <video
              src={project.video}
              autoPlay
              muted
              loop
              className="h-full w-full object-cover"
            />
          ) : project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-neutral-800/50">
              {project.quote && (
                <p className="px-8 text-center text-sm text-neutral-400">
                  {project.quote}
                </p>
              )}
            </div>
          )}
        </div>

        {/* Version Badge */}
        {/* <div className="absolute left-4 top-4 text-xs text-neutral-500">
          1.00
        </div> */}

        {/* Camera Icon */}
        {/* <div className="absolute right-4 top-4">
          <svg
            className="h-6 w-6 text-neutral-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div> */}

        {/* Title and Date */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex w-full flex-col gap-3">
            {/* Title and Date Row */}
            <div className="flex flex-row items-end justify-between">
              <h3 className="text-l font-medium text-white">{project.title}</h3>
              <span className="text-xs text-neutral-400">{project.date}</span>
            </div>

            {/* Description - Animated */}
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isHovered ? 1 : 0,
                height: isHovered ? "auto" : 0,
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="overflow-hidden"
            >
              <p className="text-xs leading-relaxed text-neutral-400">
                {project.description}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function GardenPage() {
  return (
    <div className="min-h-screen bg-[#E8E4DC]">
      {/* Header */}
      <header className="border-b border-neutral-300 px-8 py-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href="/" className="text-base font-medium text-neutral-900">
            Dennis Xing
          </Link>
          <nav className="flex gap-8">
            <Link
              href="/about"
              className="text-base text-neutral-600 hover:text-neutral-900"
            >
              About
            </Link>
            <Link
              href="/garden"
              className="text-base text-neutral-900 hover:text-neutral-900"
            >
              Garden
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-8 py-24">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="mb-4 text-4xl font-medium text-neutral-900">
            The Garden
          </h1>
          <p className="text-lg text-neutral-400">
            A collection of places, notes, sketches, and builds.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-8 pb-24">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className={project.featured ? "md:col-span-2 md:row-span-2" : ""}
            >
              <ProjectCard project={project as Project} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
