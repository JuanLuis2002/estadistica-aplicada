"use client"

import { useMobile } from "@/hooks/use-mobile"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { ReactNode } from "react"

interface UniversalChartWrapperProps {
  title: string
  description: string
  icon: ReactNode
  headerColor: string
  children: ReactNode
  descriptionText?: string
  sources?: Array<{
    title: string
    content: string
  }>
}

export function UniversalChartWrapper({
  title,
  description,
  icon,
  headerColor,
  children,
  descriptionText,
  sources = [],
}: UniversalChartWrapperProps) {
  const { isMobile } = useMobile()

  return (
    <div className="space-y-4 md:space-y-8">
      <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl">
        <CardHeader className={`${headerColor} text-white rounded-t-lg p-4 md:p-6`}>
          <div className="flex items-center gap-2 md:gap-3">
            <div className="p-1.5 md:p-2 bg-white/20 rounded-lg">{icon}</div>
            <div>
              <CardTitle className="text-base md:text-2xl font-bold">{title}</CardTitle>
              <CardDescription className="text-white/90 text-xs md:text-base">{description}</CardDescription>
            </div>
          </div>
        </CardHeader>

        {descriptionText && (
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-4 md:p-6 border-b">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-sm md:text-lg font-bold text-gray-800 mb-2 md:mb-3 flex items-center gap-2">
                <span className="text-base md:text-xl">📋</span>
                Descripción General
              </h3>
              <p className="text-xs md:text-base text-gray-700 leading-relaxed">{descriptionText}</p>
            </div>
          </div>
        )}

        <CardContent className="p-4 md:p-8">{children}</CardContent>

        {sources.length > 0 && (
          <div className="mt-4 md:mt-8 p-4 md:p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-b-2xl border-t">
            <h3 className="text-sm md:text-xl font-bold text-gray-800 mb-3 md:mb-4 flex items-center gap-2">
              <span className="text-lg md:text-2xl">📚</span>
              Fuentes Bibliográficas
            </h3>
            <div className={`grid ${isMobile ? "grid-cols-1" : "md:grid-cols-2"} gap-3 md:gap-6 text-xs md:text-sm`}>
              {sources.map((source, index) => (
                <div key={index} className="p-3 md:p-4 bg-white rounded-lg shadow-sm">
                  <p className="font-semibold text-blue-800 mb-1 md:mb-2">{source.title}:</p>
                  <p className="text-gray-700">{source.content}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </Card>
    </div>
  )
}
