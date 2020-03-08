package com.simplepostit.simplepostit.postit;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Controller for the webpage itself.
 *
 * @author temedeus
 */
@Controller
public class SPAController {
    @RequestMapping(value = "/")
    public String index() {
        return "index";
    }
}