
package com.baroservice.ws;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>anonymous complex type�� ���� Java Ŭ�����Դϴ�.
 * 
 * <p>���� ��Ű�� ������ �� Ŭ������ ���ԵǴ� �ʿ��� �������� �����մϴ�.
 * 
 * <pre>
 * &lt;complexType&gt;
 *   &lt;complexContent&gt;
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType"&gt;
 *       &lt;sequence&gt;
 *         &lt;element name="ChangeCorpManagerResult" type="{http://www.w3.org/2001/XMLSchema}int"/&gt;
 *       &lt;/sequence&gt;
 *     &lt;/restriction&gt;
 *   &lt;/complexContent&gt;
 * &lt;/complexType&gt;
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "", propOrder = {
    "changeCorpManagerResult"
})
@XmlRootElement(name = "ChangeCorpManagerResponse")
public class ChangeCorpManagerResponse {

    @XmlElement(name = "ChangeCorpManagerResult")
    protected int changeCorpManagerResult;

    /**
     * changeCorpManagerResult �Ӽ��� ���� �����ɴϴ�.
     * 
     */
    public int getChangeCorpManagerResult() {
        return changeCorpManagerResult;
    }

    /**
     * changeCorpManagerResult �Ӽ��� ���� �����մϴ�.
     * 
     */
    public void setChangeCorpManagerResult(int value) {
        this.changeCorpManagerResult = value;
    }

}
