import { chakra, Tooltip, Text, Button } from '@chakra-ui/react'
import { HelpCircleIcon } from 'assets/icons/HelpCircleIcon'
import Link from 'next/link'
import React from 'react'
import { PricingCard } from './PricingCard'
import { chatsLimit } from '@typebot.io/lib/pricing'

export const FreePlanCard = () => (
  <PricingCard
    data={{
      price: 'Free',
      name: 'Personal',
      features: [
        'Unlimited typebots',
        <>
          <Text>
            <chakra.span fontWeight="bold">
              {chatsLimit.FREE.totalIncluded}
            </chakra.span>{' '}
            chats/month
          </Text>
          &nbsp;
          <Tooltip
            hasArrow
            placement="top"
            label="A chat is counted whenever a user starts a discussion. It is
  independant of the number of messages he sends and receives."
          >
            <chakra.span cursor="pointer" h="7">
              <HelpCircleIcon />
            </chakra.span>
          </Tooltip>
        </>,
        'Native integrations',
        'Webhooks',
        'Custom Javascript & CSS',
      ],
    }}
    button={
      <Button
        as={Link}
        href="https://chatworth.io/register"
        variant="outline"
        colorScheme="gray"
        size="lg"
        w="full"
        fontWeight="extrabold"
        py={{ md: '8' }}
      >
        Get started
      </Button>
    }
  />
)
