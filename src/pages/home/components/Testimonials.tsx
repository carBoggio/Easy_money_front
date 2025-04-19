import React from 'react';
import { Card, CardBody, Avatar } from '@heroui/react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      content: "I won 5 ETH on my first try with CryptoRaffle! The entire process was transparent and the winnings were transferred to my wallet instantly. Definitely the most trustworthy crypto raffle platform out there.",
      author: "Alex Morgan",
      position: "Crypto Investor",
      avatar: "https://i.pravatar.cc/150?u=alex"
    },
    {
      content: "Been using CryptoRaffle for months now. Their blockchain-based draw system gives me confidence that everything is fair and transparent. Already won twice and both times the prize was in my wallet within minutes!",
      author: "Sarah Chen",
      position: "Blockchain Developer",
      avatar: "https://i.pravatar.cc/150?u=sarah"
    },
    {
      content: "What sets CryptoRaffle apart is the variety of prizes and supported cryptocurrencies. Whether you're into Bitcoin, Ethereum, or stablecoins, they've got raffles for everyone. The UI is also super intuitive.",
      author: "Mike Thompson",
      position: "DeFi Enthusiast",
      avatar: "https://i.pravatar.cc/150?u=mike"
    }
  ];

  return (
    <section className="py-16 bg-content1/20 dark:bg-content1/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground">What Our Users Say</h2>
          <p className="text-foreground/60 mt-2 max-w-2xl mx-auto">
            Join thousands of satisfied crypto enthusiasts on our platform
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-divider" isHoverable>
              <CardBody className="p-6">
                <div className="flex flex-col h-full">
                  {/* Stars */}
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-warning" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <div className="flex-1 mb-6">
                    <p className="text-foreground/70 italic">"{testimonial.content}"</p>
                  </div>
                  
                  {/* Author */}
                  <div className="flex items-center mt-auto">
                    <Avatar 
                      src={testimonial.avatar} 
                      alt={testimonial.author}
                      size="md"
                      className="mr-3"
                    />
                    <div>
                      <div className="font-medium text-foreground">{testimonial.author}</div>
                      <div className="text-sm text-foreground/60">{testimonial.position}</div>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};