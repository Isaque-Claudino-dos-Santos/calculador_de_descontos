<?php

namespace CLI;

/*

Key: string (php, node, yarn)
action: string (make, create, use)
params: object (name=test, port=9000, port:1291)
flags: string (--auto, --make,--reload)

*/


class Prompt
{
    public function __construct(
        private readonly string $key,
        private readonly array $arguments
    ) {
    }
}
