
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
 *         &lt;element name="GetLinkedDocsResult" type="{http://ws.baroservice.com/}ArrayOfLinkedDoc" minOccurs="0"/&gt;
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
    "getLinkedDocsResult"
})
@XmlRootElement(name = "GetLinkedDocsResponse")
public class GetLinkedDocsResponse {

    @XmlElement(name = "GetLinkedDocsResult")
    protected ArrayOfLinkedDoc getLinkedDocsResult;

    /**
     * getLinkedDocsResult �Ӽ��� ���� �����ɴϴ�.
     * 
     * @return
     *     possible object is
     *     {@link ArrayOfLinkedDoc }
     *     
     */
    public ArrayOfLinkedDoc getGetLinkedDocsResult() {
        return getLinkedDocsResult;
    }

    /**
     * getLinkedDocsResult �Ӽ��� ���� �����մϴ�.
     * 
     * @param value
     *     allowed object is
     *     {@link ArrayOfLinkedDoc }
     *     
     */
    public void setGetLinkedDocsResult(ArrayOfLinkedDoc value) {
        this.getLinkedDocsResult = value;
    }

}
