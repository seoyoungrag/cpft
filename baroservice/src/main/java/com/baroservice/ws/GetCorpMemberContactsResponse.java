
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
 *         &lt;element name="GetCorpMemberContactsResult" type="{http://ws.baroservice.com/}ArrayOfContact" minOccurs="0"/&gt;
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
    "getCorpMemberContactsResult"
})
@XmlRootElement(name = "GetCorpMemberContactsResponse")
public class GetCorpMemberContactsResponse {

    @XmlElement(name = "GetCorpMemberContactsResult")
    protected ArrayOfContact getCorpMemberContactsResult;

    /**
     * getCorpMemberContactsResult �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link ArrayOfContact }
     *     
     */
    public ArrayOfContact getGetCorpMemberContactsResult() {
        return getCorpMemberContactsResult;
    }

    /**
     * getCorpMemberContactsResult �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link ArrayOfContact }
     *     
     */
    public void setGetCorpMemberContactsResult(ArrayOfContact value) {
        this.getCorpMemberContactsResult = value;
    }

}
