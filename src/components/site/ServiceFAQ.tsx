import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ContentSection } from "@/components/site/PageHero";
import { FadeIn } from "@/components/site/FadeIn";

export function ServiceFAQ({ items }: { items: Array<{ q: string; a: string }> }) {
  return (
    <ContentSection>
      <FadeIn className="max-w-3xl mx-auto">
        <span className="badge-eyebrow mb-4">Questions fréquentes</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-3">FAQ</h2>
        <div className="mt-10">
          <Accordion type="single" collapsible>
            {items.map((item, i) => (
              <AccordionItem key={i} value={`q${i}`}>
                <AccordionTrigger className="text-left font-semibold text-base py-5">{item.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-[15px] leading-relaxed pb-5">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </FadeIn>
    </ContentSection>
  );
}
