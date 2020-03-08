package com.simplepostit.simplepostit.postit;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

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

    private String content;

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