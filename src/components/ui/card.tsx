import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { Star, Heart, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const useIntersectionObserver = (
  options = {}
): [React.RefObject<HTMLDivElement | null>, boolean] => {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated) {
        setIsVisible(true);
        setHasAnimated(true);
        observer.unobserve(entry.target); // Stop observing after first animation
      }
    }, options);

    const element = elementRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [hasAnimated, options]);

  return [elementRef, isVisible];
};

// Add a new component for animated icons
const CardIcon = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    isVisible?: boolean;
    icon?: React.ReactNode;
  }
>(({ className, isVisible, icon, style, ...props }, ref) => (
  <div
    ref={ref}
    style={style}
    className={cn(
      "transition-all duration-500",
      isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0",
      className
    )}
    {...props}
  >
    {icon}
  </div>
));
CardIcon.displayName = "CardIcon";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const [intersectionRef, isVisible] = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: "50px",
  });

  const [headerNode, setHeaderNode] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (headerNode && isVisible) {
      const header = headerNode.querySelector('[role="banner"]');
      if (header && header instanceof HTMLElement) {
        header.style.visibility = "visible";
      }
    }
  }, [isVisible, headerNode]);

  return (
    <div
      ref={(node) => {
        // Handle both refs
        if (node) {
          intersectionRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) ref.current = node;
        }
      }}
      className={cn(
        "rounded-xl border bg-card text-card-foreground shadow transition-all duration-500",
        isVisible
          ? "translate-y-0 opacity-100 scale-100"
          : "translate-y-10 opacity-0 scale-95",
        className
      )}
      {...props}
    />
  );
});
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { isVisible?: boolean }
>(({ className, isVisible, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  >
    {React.Children.map(props.children, (child, index) => {
      if (React.isValidElement(child) && child.type === CardIcon) {
        return React.cloneElement(child, {
          isVisible,
          style: { transitionDelay: `${index * 100}ms` },
        });
      }
      return child;
    })}
  </div>
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

// Example usage component
const ExampleCards = () => {
  return (
    <div className="space-y-8 p-8">
      {[1, 2, 3].map((i) => (
        <Card key={i}>
          <CardHeader>
            <div className="flex gap-4 mb-4">
              <CardIcon icon={<Star className="w-6 h-6" />} />
              <CardIcon icon={<Heart className="w-6 h-6" />} />
              <CardIcon icon={<MessageCircle className="w-6 h-6" />} />
            </div>
            <CardTitle>Card {i}</CardTitle>
            <CardDescription>
              This card animates when scrolled into view
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Some content for card {i}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  CardIcon,
  ExampleCards,
};
