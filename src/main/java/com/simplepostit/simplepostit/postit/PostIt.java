package com.simplepostit.simplepostit.postit;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.Size;

/**
 * Model representing a single post it.
 *
 * @author temedeus
 */
@Entity
public class PostIt {

    private @Id
    @GeneratedValue
    Long id;

    @Size(min = 0, max = 200)
    private String content;

    // Default constructor.
    private PostIt() {
    }

    public PostIt(String content) {
        this.content = content;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}