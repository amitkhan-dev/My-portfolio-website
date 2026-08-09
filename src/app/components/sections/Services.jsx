"use client";

import React from "react";
import { Code2, Layout, Server, Zap, Terminal } from "lucide-react";
import { servicesData } from "@/data/servicesData";


export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-gray-950 py-10 sm:py-10 lg:py-8">
    
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-gray-900/80 px-4 py-2 backdrop-blur-sm">
            <Terminal size={15} className="text-emerald-400" />
            <span className="font-mono text-xs font-medium uppercase tracking-widest text-gray-400"> Services & Capabilities
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl lg:text-5xl"> Solutions <span className="text-emerald-400">I Provide</span> </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base"> High-quality software development services tailored to build modern, fast, and scalable digital products. </p>

          <div className="mx-auto mt-7 h-1 w-12 rounded-full bg-emerald-500" />
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {servicesData.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/80 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:bg-gray-900 hover:shadow-xl hover:shadow-emerald-950/20">
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-emerald-500 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"/>

                <div>
                  {/* Service Icon */}
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl border border-gray-800 bg-gray-950 text-emerald-400 transition-all duration-300 group-hover:border-emerald-500/40 group-hover:shadow-md group-hover:shadow-emerald-500/10"> <Icon size={26} />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-100 transition-colors duration-300 group-hover:text-emerald-400"> {service.title} </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-400">
                    {service.description} </p>
                  <ul className="mt-6 space-y-2 border-t border-gray-800/80 pt-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs font-medium text-gray-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}