import * as React from "react"

type ToastProps = {
  title?: string
  description?: string
  variant?: "default" | "destructive"
}

export const useToast = () => {
  const toast = ({ title, description }: ToastProps) => {
    // Simple toast implementation - in a real app you'd use a proper toast library
    console.log(`Toast: ${title} - ${description}`)
    
    // Create a simple notification
    if (typeof window !== 'undefined') {
      const notification = document.createElement('div')
      notification.className = 'fixed top-4 right-4 bg-background border border-border rounded-lg p-4 shadow-lg z-50 max-w-sm'
      notification.innerHTML = `
        <div class="font-semibold">${title}</div>
        <div class="text-sm text-muted-foreground">${description}</div>
      `
      document.body.appendChild(notification)
      
      setTimeout(() => {
        document.body.removeChild(notification)
      }, 3000)
    }
  }

  return { toast }
}